import React from "react";
import {View, Text, StyleSheet } from 'react-native';


const Recordscreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Record Screen</Text>
        </View>
    );
};

export default Recordscreen;

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
