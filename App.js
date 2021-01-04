import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, image} from 'react-native';
import colors from "../viewimage/colors"

export default function App() {
  return (
    <View
    style={styles.container}>
      <View style ={styles.closedIcon}></View>
      <View style ={styles.deleteIcon}></View>

    <Image 
    resizeMode = "contain"
    style={styles.image}
    source={require("../viewimage/assets/chair.jpg")}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    height: "100%",

  },
  closedIcon: {
    width: 50 ,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50 ,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,

  },
});
