import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import Home from '../screens/onboard';
import Login from '../screens/auth/login';
import RequestOpt from '../screens/auth/request-otp';
import VerifyOtp from '../screens/auth/verify-otp';
import GetStartedOnboard from '../screens/onboard/get-started-onboard';
import Splash from '../screens/onboard/splash';

enableScreens();
type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

const Stack:any = createNativeStackNavigator<RootStackParamList>();
const {Navigator, Screen} = Stack;

preventAutoHideAsync().catch(console.warn);

function AppStack() {
  const [isLoadingSplash, setIsLoadingSplash] = useState(true);

  const init = (): void => {
    setTimeout(async () => {
      hideAsync().catch(console.warn);
      setIsLoadingSplash(false);
    }, 5000);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
    {isLoadingSplash && <Splash />}
    {!isLoadingSplash && 
    <Navigator initialRouteName='onboard'>
        <Screen name='onboard' component={Home} options={{headerShown: false}}/>
        <Screen name='login' component={Login} options={{headerShown: false}}/>
        <Screen name='otp' component={RequestOpt} options={{headerShown: false}} />
        <Screen name='verify-otp' component={VerifyOtp} options={{headerShown: false}} />
        <Screen name='get-started-onboard' component={GetStartedOnboard} options={{headerShown: false}} />
    </Navigator>
    }
    </>
  );
}


export default AppStack;