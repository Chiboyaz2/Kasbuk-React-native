import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import UserImg from '../assets/icons/user.png';
import ArrowDown from '../assets/icons/arrowdown.png';
import Bell from '../assets/icons/bell.png';
import Bar from '../assets/icons/bar.png';
import PlusButton from "../components/PlusButton";



const Homescreen = ({navigation}) => {
    return (

      <View style={styles.container}>
        <ScrollView  style={styles.containerContent} 
          showsVerticalScrollIndicator={false} 
          showsHorizontalScrollIndicator={false}
        >
            <View style={styles.heropage}>
                <View style={styles.userprofile}>
                    <View style={styles.user}>
                      <View style={styles.circle}>
                          <Image
                            style={styles.image}
                            source={UserImg}
                          />
                      </View>

                      <View style={styles.name}>
                        <Text style={styles.kas}>Kashbuk...</Text>
                        <Image
                            style={styles.image2}
                            source={ArrowDown}
                          />
                      </View>

                      <View>
                        <Image
                            style={styles.image3}
                            source={Bell}
                          />
                      </View>
                    </View>

                    <View style={styles.analysis}>
                          <Image
                            style={styles.bar}
                            source={Bar}
                          />
                    </View>
                    
                    <View style={styles.summary}>
                        <Text style={styles.coloredText}>Daily summary</Text>
                        <Text style={styles.coloreddot}>.</Text>
                        <Text style={styles.coloredText}>16 November 2022</Text>
                    </View>
                </View>

                <View style={styles.balance}>
                  <View style={styles.current}>
                    <Text style={styles.bigbalance}>₦1,540,500.00</Text>
                    <Text style={styles.balancetext}>Current balance</Text>
                  </View>

                  <View style={styles.inexp}>
                    <View style={styles.income}>
                      <Text style={styles.incomecash}>₦15,455.00</Text>
                      <Text style={styles.inexptext}>Income</Text>
                    </View>

                    <View style={styles.expense}>
                    <Text style={styles.expensecash}>₦50,300.00</Text>
                    <Text style={styles.inexptext}>Expenses</Text>
                  </View>
                  </View>

                </View >
                
            </View >

            <View style={styles.homebody}>
                <View style={styles.transcation}>
                    <Text style={styles.trans}>Recent transactions</Text>
                    <Text style={styles.view}>View all</Text>
                </View>

                <View style={styles.Day}>
                  <Text style={styles.day}>Today</Text>

                  <View style={styles.way}>
                    <View >
                      <Text style={styles.heading}>Lumi Hair 24-in - Black</Text>
                      <Text style={styles.time}>10:24am</Text>
                    </View>

                    <View>
                      <Text style={styles.cash}>₦15,455.00</Text>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Online</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.way}>
                    <View >
                      <Text style={styles.heading}>Bone Straight 32-in - Black</Text>
                      <Text style={styles.time}>10:24am</Text>
                    </View>

                    <View>
                      <Text style={styles.cashred}>₦10,055.00</Text>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>POS</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>

                <View style={styles.Day}>
                  <Text style={styles.day}>Yesterday</Text>

                  <View style={styles.way}>
                    <View >
                      <Text style={styles.heading}>Lumi Hair 24-in - Black</Text>
                      <Text style={styles.time}>10:24am</Text>
                    </View>

                    <View>
                      <Text style={styles.cash}>₦15,455.00</Text>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Online</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.way}>
                    <View >
                      <Text style={styles.heading}>Bone Straight 32-in - Black</Text>
                      <Text style={styles.time}>10:24am</Text>
                    </View>

                    <View>
                      <Text style={styles.cashblack}>-₦10,055.00</Text>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>POS</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>
            </View>

        </ScrollView>

        <PlusButton/>
      </View>
        
    );
};

export default Homescreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
    },

    containerContent: {
      backgroundColor: '#F2F4F7',
      
    },

    heropage: {
        height: 345,
        width: '100%',
        left: 0, 
        top: 0,
        backgroundColor: '#077174',
        position: 'relative',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },

      userprofile: {
        height: '75%',
        width: '100%',     
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
      },


      user: {
        height: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      circle: {
        width: 40,
        height: 40,
        borderRadius: 30, 
        backgroundColor: '#fff', 
        justifyContent: 'center',
        alignItems: 'center',
      },

      name: {
        width: '45%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 60,
      },

      kas: {
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 24,
        letterSpacing: 0.18,
        color: '#fff'
      },

      image: {
        width: 20,
        height: 20,
      },

      image2: {
        width: 28,
        height: 16,
      },

      image3: {
        width: 25,
        height: 25,
      },

      analysis: {
        height: 70,
        width: 70, 
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },

      bar: {
        height: 30,
        width: 30, 
      },

      
      summary: {
        height: 50,
        width: '75%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

      coloredText: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,  
      },

      coloreddot: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 35,
        lineHeight: 24,  
      },


      balance: {
        height: 170,
        width: 300,     
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: '10',
        alignSelf: 'center',
      },

      current: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },

      inexp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
      },

      bigbalance: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 2,
        color: '#1D2939'
      },

      balancetext: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 40,
        color: '#667085',
        marginTop: -5,
      },

      incomecash: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 40,
        color: '#12B76A',
        letterSpacing: 2,
      },

      expensecash: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 40,
        color: '#F04438',
        letterSpacing: 2,
      },

      inexptext: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 40,
        color: '#667085',
        marginTop: -10,
      },

      homebody: {
        width: '100%',
        left: 0, 
        marginTop: 70,
        position: 'relative',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },

      transcation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

      trans: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 40,
        color: ' #1D2939',
      },

      view: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 40,
        color: '#077174',
      },

      Day:{
        display: 'flex',
        flexDirection: 'colunm',
        justifyContent: 'space-between',
        marginTop: 20,
      },

      day: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 40,
        color: '#667085',
      },

      way: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 2,

      },

      heading: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 40,
        color: '#1D2939',
      },

      time: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 40,
        color: '#98A2B3',
      },

      cash: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 40,
        color: '#12B76A',
      },

      cashred: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 40,
        color: '#F04438',
      },

      cashblack: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 40,
        color: '#000',
      },

      button: {
        backgroundColor: '#EAECF0',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: '#667085',
        fontWeight: '400',
        textAlign: 'center',
        fontSize: 14,
      },





  });
