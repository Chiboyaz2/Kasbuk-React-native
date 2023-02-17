import React, { useState } from 'react';
import {View, Modal, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import Arrow from '../assets/icons/arrow2.png';


const SortButtons = ({navigation}) => {

    const [selectedValue, setSelectedValue] = useState('Sort by');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const options = ['Sort by', 'Failed', 'Succed'];

    const handleOptionPress = (option) => {
        setSelectedValue(option);
        setIsModalVisible(false); 
    };

    return (
        <View style={styles.selectAll}>
                <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.button}>
                  <Text style={styles.buttonText}>{selectedValue}</Text>
                  <Image source={Arrow} style={styles.arrowImage} />
                </TouchableOpacity>
                <Modal
                  visible={isModalVisible}
                  transparent
                  animationType="fade"
                  onRequestClose={() => setIsModalVisible(false)}
                >
                  <TouchableOpacity
                    onPress={() => setIsModalVisible(false)}
                    style={styles.modalBackground}
                  >
                    <View style={styles.modalContainer}>
                      {options.map((option) => (
                        <TouchableOpacity
                          key={option}
                          onPress={() => handleOptionPress(option)}
                          style={styles.modalOption}
                        >
                          <Text>{option}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </TouchableOpacity>
                </Modal>
            </View>
    );
};

export default SortButtons;

const styles = StyleSheet.create({
    selectAll: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginRight: 10,
        width: 80,
        height: 50,
      },
      button: {
        width: 100,
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 6, 
      },
      buttonText: {
        fontSize: 14,
      },
      modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingLeft: 270,
      },
      modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
      },
      modalOption: {
        paddingVertical: 10,
      },
        
     });