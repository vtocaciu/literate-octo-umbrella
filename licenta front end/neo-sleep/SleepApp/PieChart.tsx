import {  StyleSheet, Image, View } from "react-native";
import React from 'react';
import { PieChart, PieChartData } from 'react-native-svg-charts';
import { ForeignObject, Text } from 'react-native-svg';
import { VictoryPie } from 'victory-native';

export default function MyPieChart({ data }: any): JSX.Element {

  const [loading, setLoading] = React.useState(true);

  const randomNumber = Math.floor(Math.random() * 4);  
  
  return (
  
      // <PieChart
      // style={{ height: 75, marginTop: 10, zIndex: 999}}
      // data={data}
      // innerRadius={'85%'}
      
      // >
      // <ForeignObject x={-22} y={-22}>
      //   {randomNumber == 0 ? <Image source={require('../Icons/sleep-0.png')} style={styles.imageStyle} onLoadEnd={() => setLoading(false)} /> :
      //   randomNumber == 1 ? <Image source={require('../Icons/sleep-1.png')} style={styles.imageStyle} onLoadEnd={() => setLoading(false)} /> :
      //   randomNumber == 2 ? <Image source={require('../Icons/sleep-2.png')} style={styles.imageStyle} onLoadEnd={() => setLoading(false)} /> :
      //    <Image source={require('../Icons/sleep-3.png')} style={styles.imageStyle} onLoadEnd={() => setLoading(false)} />}
      //   {loading ? <Text>Loading...</Text> : null}
      // </ForeignObject>
      // </PieChart>
    
    <VictoryPie
      data={data}
      width={190}
      height={190}
      labels={({ datum }) => ""}
      innerRadius={30}
        
    />
    
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 44,
    width: 44,
    resizeMode: 'contain',
    marginLeft: 5,
    zIndex: 999
},
});