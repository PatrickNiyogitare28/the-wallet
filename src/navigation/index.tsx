import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/onboard';

enableScreens();
type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

const Stack:any = createNativeStackNavigator<RootStackParamList>();
const {Navigator, Screen} = Stack;
function AppStack() {
  return (
    <Navigator initialRouteName='home'>
        <Screen name='home' component={Home} options={{headerShown: false}}/>
    </Navigator>
  );
}


export default AppStack;