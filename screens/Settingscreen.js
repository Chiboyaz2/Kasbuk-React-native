import React from "react";
import {View, Text, StyleSheet } from 'react-native';


const Settingscreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Setting Screen</Text>
      </View>
    );
};

export default Settingscreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#8fcbbc',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    
  });
