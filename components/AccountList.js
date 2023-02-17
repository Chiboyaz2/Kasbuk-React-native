import React from "react";
import {View, Text, StyleSheet } from 'react-native';


const AccountList = ({navigation}) => {
    return (
        <View style={styles.accountList}>
            <View style={styles.accountText}>
              <Text style={styles.accountHeading}>Timi Tayo</Text>
              <Text style={styles.accountSubHeading}>2 dozen of black jeans</Text>
            </View>

            <View style={styles.accountText2}>
              <Text style={styles.accountCash}>₦15,455.00</Text>
              <Text style={styles.accountDate}>Due 25 Nov 2022</Text>
            </View>
        </View>
    );
};

export default AccountList;

const styles = StyleSheet.create({
    accountList: {
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        
        backgroundColor: '#fff', 
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
  
    accountText: {
      width: '45%',
      height: '60%',
      display: 'flex',
      flexDirection: 'colunm',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
  
    accountText2: {
      width: '45%',
      height: '60%',
      display: 'flex',
      flexDirection: 'colunm',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
  
    accountHeading: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 24,
      color: '#1D2939',
    },
  
    accountSubHeading: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 20,
      color: '#667085',
    },
  
    accountCash: {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 24,
      color: '#1D2939',
    },
  
    accountDate: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 20,
      color: '#667085',
    }
  
    
  });
