import React, { useState } from 'react';
import {View, Text, ImageBackground} from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';
import AuthAppBar from './auth-app-bar';
import TabSwitch from './tab-switcher';
import BgImage from '../../../assets/images/auth-bg.png';
import { LoginForm, Signup } from '../../components/forms';

const Login: React.FC = () => {
    const [showLogin, setShowLogin] = useState<boolean>(true);
    return (
        <View style={tw`h-full`}>
          <ImageBackground source={BgImage}  style={tw`h-full w-full bg-[#1B232A]`}>
          <View style={tw`py-[10%] px-[2%]`}>
           <AuthAppBar />
           <View style={tw`p-4`}>
           <TabSwitch showLogin={showLogin} setShowLogin={setShowLogin}/>
              {showLogin ? 
               <LoginForm />
               :
               <Signup />
              }
           </View>
          </View>
        </ImageBackground>
        </View>
    )
}
export default Login;