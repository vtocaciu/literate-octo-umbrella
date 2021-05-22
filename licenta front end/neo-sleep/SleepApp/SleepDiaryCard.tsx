import { View, StyleSheet, Text, Image } from "react-native";
import React from 'react';
import { getWidth, normalizeFontSize } from "../utils/resizeUtils";
import { formatDate } from "../utils/consts";
import { useFonts } from "expo-font";
import MyPieChart from "./MyPieChart";


export default function SleepDiaryCard({ rating }: any): JSX.Element {

  let [fontsLoaded] = useFonts({
    'ModernSansLight': require('../assets/fonts/ModernSansLight.ttf'),
  });


 
  

  return (
    !fontsLoaded ? <View><Text>Loading..</Text></View> : (
      <View style={styles.container} >

        <View>
          <Text style={styles.dateStyle}>12/03/2021</Text>
        </View>
        <View style={styles.circleContainer}>
          
        </View>
        <View style={styles.containerImage}>
          {rating == 1 ? <Image source={require('../Icons/bad.png')} style={styles.imageStyle} /> :
            rating == 2 ? <Image source={require('../Icons/poor.png')} style={styles.imageStyle} /> :
              rating == 3 ? <Image source={require('../Icons/normal.png')} style={styles.imageStyle} /> :
                rating == 4 ? <Image source={require('../Icons/good.png')} style={styles.imageStyle} /> : 
                <Image source={require('../Icons/best.png')} style={styles.imageStyle} />}
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
    height: 80,
    width: 80,
    resizeMode: 'contain',
    
  },
  containerImage: {
    position: 'absolute',
    right: 15,
    top: 15
  },
  pillowImage: {
    position: 'absolute',
    right: 30,
    top: 30
  }
});
