import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from '../Qrgenrator/src/Stackjs/Stack'
const App = () => {
  return (
    <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  )
}

export default App