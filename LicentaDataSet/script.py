from datetime import datetime
import random

def getSleepData(data):
    date = datetime.strptime(data[0], '%d/%m/%Y')
    deepSleepTime = data[2]
    shallowSleepTime = data[3]
    wakeSleepTime = data[4]
    start = data[5]
    stop = data[6]
    inBedTime = datetime.fromtimestamp(start)
    outBedTime = datetime.fromtimestamp(stop)
    totalDuration = deepSleepTime + shallowSleepTime + wakeSleepTime
    actualSleepDuration = totalDuration - wakeSleepTime
    sleepEfficiency = 100 * actualSleepDuration / totalDuration
    inBedAwakePercentage = 100 * wakeSleepTime / totalDuration
    deepSleepPercentage = 100 * deepSleepTime / totalDuration

    REMDuration = 0.25 * shallowSleepTime
    lightSleepDuration = 0.75 * shallowSleepTime
    lightSleepPercentage = 100 * lightSleepDuration / totalDuration
    REMPercentage = 100 * REMDuration / totalDuration

    sleepScore = 0
    if REMPercentage > 25:
        sleepScore = sleepScore + 20
    elif REMPercentage >= 10:
        sleepScore = sleepScore + (REMPercentage - 10 + 1) * 1.3

    if actualSleepDuration >= 7*60:
        sleepScore = sleepScore + 30
    elif actualSleepDuration >= 4*60:
        sleepScore = sleepScore + (actualSleepDuration - 4*60 + 1) * 0.16

    if deepSleepPercentage >= 20:
        sleepScore = sleepScore + 20
    else:
        sleepScore = sleepScore + deepSleepPercentage

    if wakeSleepTime <= 50:
        sleepScore = sleepScore + (50 - wakeSleepTime) * 0.6

    # print(sleepScore)
    # print(totalDuration)
    # print(inBedTime)
    # print(outBedTime)
    # print(sleepEfficiency)
    # print(actualSleepDuration)
    # print(wakeSleepTime)
    # print(REMDuration)
    # print(lightSleepDuration)
    # print(deepSleepTime)
    # print(inBedAwakePercentage)
    # print(REMPercentage)
    # print(lightSleepPercentage)
    # print(deepSleepPercentage)

    return (date, totalDuration, inBedTime, outBedTime, sleepEfficiency, actualSleepDuration,
            wakeSleepTime, REMDuration, lightSleepDuration, deepSleepTime, inBedAwakePercentage, REMPercentage,
            lightSleepPercentage, deepSleepPercentage, sleepScore)


if __name__ == '__main__':
    # file = open("sleep.csv", "r")
    # filew = open("sleepinput.csv", "w+")
    file = open("sleep_predict.csv", "r")
    filew = open("sleepprediction.csv", "w+")
    file.readline()
    allLines = file.readlines()
    results = []
    for line in allLines:
        line = line.strip()
        sleepData = line.split(",")
        sleepData[2] = int(sleepData[2])
        sleepData[3] = int(sleepData[3])
        sleepData[4] = int(sleepData[4])
        if sleepData[4] == 0:
            sleepData[4] = random.randint(1,21)
        sleepData[5] = int(sleepData[5])
        sleepData[6] = int(sleepData[6])
        results.append(getSleepData(sleepData))
    results = sorted(results, key=lambda x: x[0])

    filew.write("date,totalDuration,inBedTime,outBedTime,sleepEfficiency,actualSleepDuration,wakeSleepTime,REMDuration,lightSleepDuration,deepSleepTime,inBedAwakePercentage,REMPercentage,lightSleepPercentage,deepSleepPercentage,sleepScore\n")
    print("[")
    for r in results:
        for i in range(len(r)):
            filew.write(str(r[i]))
            if i != len(r)-1:
                filew.write(",")
        filew.write("\n")
        print("{")
        print("\"userid\":\"5e9f357d-d41f-4ff3-bc3c-dd610174e7c4\",")
        print("\"date\":" + "\"" + str(r[0]) + "\",")
        print("\"totalDuration\":" + "\"" + str(r[1]) + "\",")
        print("\"inBedTime\":" + "\"" + str(r[2]) + "\",")
        print("\"outBedTime\":" + "\"" + str(r[3]) + "\",")
        print("\"sleepEfficiency\":" + "\"" + str(r[4]) + "\",")
        print("\"actualSleepDuration\":" + "\"" + str(r[5]) + "\",")
        print("\"wakeSleepTime\":" + "\"" + str(r[6]) + "\",")
        print("\"REMDuration\":" + "\"" + str(r[7]) + "\",")
        print("\"lightSleepDuration\":" + "\"" + str(r[8]) + "\",")
        print("\"deepSleepTime\":" + "\"" + str(r[9]) + "\",")
        print("\"inBedAwakePercentage\":" + "\"" + str(r[10]) + "\",")
        print("\"REMPercentage\":" + "\"" + str(r[11]) + "\",")
        print("\"lightSleepPercentage\":" + "\"" + str(r[12]) + "\",")
        print("\"deepSleepPercentage\":" + "\"" + str(r[13]) + "\",")
        print("\"sleepScore\":" + "\"" + str(r[14]) + "\"")

        print("},")
    print("]")


