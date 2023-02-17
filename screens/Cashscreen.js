import React, { useState } from 'react';
import {View, TextInput, Text, Modal,  StyleSheet,  ScrollView, TouchableOpacity, Image  } from 'react-native';
import Search from '../assets/icons/search.png';
import Arrow from '../assets/icons/arrow2.png';
import AccountList from '../components/AccountList';
import AllButtons from '../components/AllButtons';
import SortButtons from '../components/SortButton';
import PlusButton from '../components/PlusButton';


const Cashscreen = ({navigation}) => {

  const [selectedValue, setSelectedValue] = useState('All');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const options = ['All', 'Latest', 'Oldest'];

  const handleOptionPress = (option) => {
    setSelectedValue(option);
    setIsModalVisible(false); 
    
    
  };

    return (

    <View style={styles.container}>
      <ScrollView  style={styles.containerContent} 
          showsVerticalScrollIndicator={false} 
          showsHorizontalScrollIndicator={false}
      >
          
          <Text style={styles.text}>Cash Book</Text>

          <View style={styles.account}>
            <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText1}>Credit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
              <Text style={styles.buttonText2}>Debit</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.searchBar}>
          <TouchableOpacity style={styles.searchButton}>
              <Image
                style={styles.image}
                source={Search}
              />
            </TouchableOpacity>
            <TextInput style={styles.searchInput} placeholder="Search credit" />
            
          </View>

          

          <View style={styles.select}>
          
            <AllButtons/>
            <SortButtons/>
            
            

          </View>
          
          <AccountList/>
          <AccountList/>
          <AccountList/>
          <AccountList/>

      </ScrollView>

        <PlusButton/>
    </View>
        
      );
};

export default Cashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },

  containerContent: {
    backgroundColor: '#F2F4F7',
    padding: 20,
  },

  text: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#04393A',
    marginTop: 20,
  },

  account: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  button1: {
    width: '50%',
    height: '100%',
    marginTop: 20,
    backgroundColor: '#30898B',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button2: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#EAECF0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText1:{
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#fff',
  },

  buttonText2:{
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#000',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 48,
    marginTop: 40,
    shadowColor: '#000',
    padding: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  image: {
    marginRight: 14,
    width: 15,
    height: 15,
  },

  searchInput: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.5,
    color: '#98A2B3',
    paddingRight: 30,
  },

  select: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  selectAll: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 10,
    width: 80,
    height: 50,
  },
  button: {
    width: 100,
    backgroundColor: '#fff',
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
    paddingTop: 110,
    paddingLeft: 30,
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
