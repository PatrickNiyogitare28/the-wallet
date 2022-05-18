import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/onboard';
import Login from '../screens/auth/login';
import RequestOpt from '../screens/auth/request-otp';

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
    <Navigator initialRouteName='onboard'>
        <Screen name='onboard' component={Home} options={{headerShown: false}}/>
        <Screen name='login' component={Login} options={{headerShown: false}}/>
        <Screen name='otp' component={RequestOpt} options={{headerShown: false}} />
    </Navigator>
  );
}


export default AppStack;