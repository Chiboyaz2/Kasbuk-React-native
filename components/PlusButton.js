import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Plus from '../assets/icons/plus.png';

const PlusButton = () => {
  return (
    <View style={styles.circle}>
      <Image
        style={styles.image}
         source={Plus}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0F8D8F',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  plus: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PlusButton;