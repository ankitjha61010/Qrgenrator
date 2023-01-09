import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/home';
import Profile from '../Screen/Profile';
import Drawerjs from '../Drawer/Drawers';



const Tab = createBottomTabNavigator();

function BotttomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Drawerjs" component={Drawerjs} /> */}
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default BotttomTab;
