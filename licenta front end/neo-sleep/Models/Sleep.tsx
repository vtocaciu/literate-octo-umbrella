import { TextInput, View, StyleSheet, Button, TouchableOpacity, Text, GestureResponderEvent, Image, Dimensions, PixelRatio } from "react-native";
import React from 'react';

//decorator pattern
export class BaseSleep {
  ID: string;
  userID: string;
  totalDuration: number;
  sleepScore: number;

  constructor(ID: string, userID: string, totalDuration: number, sleepScore: number) {
    this.ID = ID;
    this.userID = userID;
    this.totalDuration = totalDuration;
    this.sleepScore = sleepScore;
  }
  public draw = (): any => {
    return (
      <View>
        <Text>BaseSleep</Text>
        <Text>Duration: { this.totalDuration.toString()}</Text>
        <Text>Sleep score: { this.sleepScore.toString()}</Text>
      </View>
    )
  }

  public getRatio(): number {
    return this.totalDuration / this.sleepScore;
  } 
}

export class Sleep extends BaseSleep{
  inBedTime: Date;
  outBedTime: Date;
  sleepEfficency: number;
  actualSleepDuration: number;
  inBedAwakeDuration: number;
  REMDuration: number;
  lightSleepDuration: number;
  deepSleepDuration: number;
  inBedAwakePercentage: number;
  percentageREM: number;
  percentageLightSleep: number;
  percentageDeepSleep: number;


  constructor(ID: string, userID: string, totalDuration: number, sleepScore: number,
    inBedTime: Date, outBedTime: Date, sleepEfficency: number,
    actualSleepDuration: number, inBedAwakeDuration: number,
    REMDuration: number, lightSleepDuration: number, deepSleepDuration: number,
    inBedAwakePercentage: number, percentageREM: number, percentageLightSleep: number,
    percentageDeepSleep: number)
  {
    super(ID, userID, totalDuration, sleepScore);
    this.inBedTime = inBedTime;
    this.outBedTime = outBedTime;
    this.sleepEfficency = sleepEfficency;
    this.actualSleepDuration = actualSleepDuration;
    this.inBedAwakeDuration = inBedAwakeDuration;
    this.REMDuration = REMDuration;
    this.lightSleepDuration = lightSleepDuration;
    this.deepSleepDuration = deepSleepDuration;
    this.inBedAwakePercentage = inBedAwakePercentage;
    this.percentageREM = percentageREM;
    this.percentageLightSleep = percentageLightSleep;
    this.percentageDeepSleep = percentageDeepSleep;
  }

  public draw = (): any => {
    return (
      <View>
        <Text>Sleep</Text>
        <Text>Duration: { this.totalDuration.toString()}</Text>
        <Text>Sleep score: { this.sleepScore.toString()}</Text>
        <Text>Ration: { this.getRatio()}</Text>
      </View>
    )
  }

  public getRatio(): number {
    const r = super.getRatio();
    return r / this.lightSleepDuration;
  } 
}

export class GeneratedSleep extends BaseSleep{
  aproxLightSleepDuration: number;
  aproxDeepSleepDuration: number;


  constructor(ID: string, userID: string, totalDuration: number, sleepScore: number,
    aproxLightSleepDuration: number, aproxDeepSleepDuration: number) {
    super(ID, userID, totalDuration, sleepScore);
    this.aproxLightSleepDuration = aproxLightSleepDuration;
    this.aproxDeepSleepDuration = aproxDeepSleepDuration;
  }  

  public draw = (): any => {
    return (
      <View>
        <Text>GSleep</Text>
        <Text>Duration: { this.totalDuration.toString()}</Text>
        <Text>Sleep score: { this.sleepScore.toString()}</Text>
      </View>
    )
  }
}

//iterator pattern
export class SleepIterator {

  private _sleepList: BaseSleep[]
  private currentIndex: number;

  constructor(sleepList: BaseSleep[]) {
    console.log("cons")
    this._sleepList = sleepList;
    this.currentIndex = 0;
  }

  public hasNext(): boolean{
    return this.currentIndex < this._sleepList.length - 1;
  }

  public hasPrevious(): boolean {
    return this.currentIndex > 0;
  }

  public getCurrent(): BaseSleep {
    return this._sleepList[this.currentIndex];
  }

  public next(): void {
    console.log("next");
    this.currentIndex = this.currentIndex + 1;
  }

  public previous(): void {
    this.currentIndex = this.currentIndex - 1;
  }
}