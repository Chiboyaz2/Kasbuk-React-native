import React from "react";
import {View, Text, StyleSheet } from 'react-native';




const Walletscreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Wallet Screen</Text>
          
        </View>
    );
};

export default Walletscreen;

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

