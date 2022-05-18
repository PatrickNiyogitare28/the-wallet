import React, { useState } from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';
import AuthAppBar from './auth-app-bar';
import TabSwitch from './tab-switcher';
import BgImage from '../../../assets/images/auth-bg.png';
import { LoginForm, Signup } from '../../components/forms';
import CloseIcon from '../../../assets/icons/close-icon.png'

interface IProps {
    navigation: any
}
const Login: React.FC<IProps> = ({navigation}) => {
    const [showLogin, setShowLogin] = useState<boolean>(true);
    
    const onNavigateToOTP = () => {
        navigation.navigate('otp');
    }

    return (
        <View style={tw`h-full`}>
          <ImageBackground source={BgImage}  style={tw`h-full w-full bg-[#1B232A]`}>
          <View style={tw`py-[10%] px-[2%]`}>
           <AuthAppBar icon={<Image source={CloseIcon}/>} onPress={() => navigation.navigate('onboard')} />
           <View style={tw`p-4`}>
           <TabSwitch showLogin={showLogin} setShowLogin={setShowLogin}/>
              {showLogin ? 
               <LoginForm onNavigate={onNavigateToOTP} />
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