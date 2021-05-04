import { View, StyleSheet, Text, Image } from "react-native";
import React from 'react';
import { getWidth, normalizeFontSize } from "../utils/resizeUtils";
import { Sleep } from "../Models/Sleep";
import { formatDate } from "../utils/consts";
import { useFonts } from "expo-font";
import { Circle, G, Text as TextR, Svg } from "react-native-svg";
import { PieChart } from 'react-native-svg-charts'
import MyPieChart from "./PieChart";


//const MyPieChart()

export default function SleepCard({ sleep, index }: any): JSX.Element {

  let [fontsLoaded] = useFonts({
    'ModernSansLight': require('../assets/fonts/ModernSansLight.ttf'),
  });


  //   const data = [
  //     {
  //         value: sleep.deepSleepTime,
  //         key: 1,
  //         svg: { fill: '#600080' },
  //     },
  //     {
  //         key: 2,
  //         value: sleep.lightSleepDuration + sleep.REMDuration,
  //         svg: { fill: '#9900cc' }
  //     },
  //     {
  //         key: 3,
  //         value: sleep.wakeSleepTime,
  //         svg: { fill: '#c61aff' }
  //     }
  // ]

  const data = [{ x: "", y: sleep.deepSleepTime },
  { x: "", y: sleep.lightSleepDuration + sleep.REMDuration },
  { x: "", y: sleep.wakeSleepTime }]

  const [loading, setLoading] = React.useState(true);

  const randomNumber = Math.floor(Math.random() * 4);

  return (
    !fontsLoaded ? <View><Text>Loading..</Text></View> : (
      <View style={styles.container} >

        <View>
          <Text style={styles.dateStyle}>{formatDate(new Date(sleep.date))}</Text>
          <Text style={styles.dateStyle}>{sleep.sleepScore.toFixed(2).toString()}</Text>
        </View>
        <View style={styles.circleContainer}>
          <MyPieChart data={data} />
        </View>
        <View style={styles.containerImage}>
          {randomNumber == 0 ? <Image source={require('../Icons/sleep-0.png')} style={styles.imageStyle} /> :
            randomNumber == 1 ? <Image source={require('../Icons/sleep-1.png')} style={styles.imageStyle} /> :
              randomNumber == 2 ? <Image source={require('../Icons/sleep-2.png')} style={styles.imageStyle} /> :
                <Image source={require('../Icons/sleep-3.png')} style={styles.imageStyle} />}
        </View>
      </View>

    )
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aef',
    width: 0.85 * getWidth(),
    height: 100,
    marginTop: 50,
    marginLeft: 0.075 * getWidth(),
    borderRadius: 15,
    flexDirection: 'row',
  },
  dateStyle: {
    marginLeft: 15,
    marginTop: 14,
    fontFamily: 'ModernSansLight',
    color: '#000',
    fontSize: normalizeFontSize(23)
  },
  circleContainer: {
    position: 'absolute',
    right: -40,
    top: -45
  },
  imageStyle: {
    height: 44,
    width: 44,
    resizeMode: 'contain',
    
  },
  containerImage: {
    position: 'absolute',
    right: 30,
    top: 30
  },
  pillowImage: {
    position: 'absolute',
    right: 30,
    top: 30
  }
});
