import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screen/home';
import Setting from '../Screen/Setting';
import Profile from '../Screen/Profile';
import BottomTab from '../Bottom/Bottom'

const Drawer = createDrawerNavigator();

export default function Drawerjs() {
function CustomDrawer(props){
    return(
        <View style={{backgroundColor:'red',flex:1}}>
            <Text>Abhsihek</Text>
        </View>
    )
}



  return (
 
      <Drawer.Navigator useLegacyImplementation initialRouteName="BottomTab" screenOptions={{headerShown:true}} drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="BottomTab" component={BottomTab} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    
  );
}
