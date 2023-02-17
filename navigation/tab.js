import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Homescreen from '../screens/Homescreen'
import Walletscreen from '../screens/Walletscreen'
import Cashscreen from '../screens/Cashscreen'
import Recordscreen from '../screens/Recordscreen'
import Settingscreen from '../screens/Settingscreen'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        showLabel: true,
        style:{
          backgroundColor: 'red',
        },
        tabBarStyle:{
          backgroundColor: 'red',
        }
      }}

      screenOptions={{
        headerShown: false
      }}


      tabBarStyle={{
        backgroundColor: 'red',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Homescreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/homeR.png') : require('../assets/icons/home.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={Walletscreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/walletR.png') : require('../assets/icons/wallet.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Cash Book" 
        component={Cashscreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/cashbookR.png') : require('../assets/icons/cashbook.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Record" 
        component={Recordscreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/menuR.png') : require('../assets/icons/menu.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Setting" 
        component={Settingscreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/settingsR.png') : require('../assets/icons/settings.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;