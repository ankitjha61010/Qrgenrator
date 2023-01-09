import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/home';
import Profile from '../Screen/Profile';
import Setting from '../Screen/Setting';
import BottomTab from '../Bottom/Bottom'
import Drawer from '../Drawer/Drawers'
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="BottomTab" component={Drawer} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}
export default MyStack;