import React, { useState } from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';
import AuthAppBar from './auth-app-bar';
import TabSwitch from './tab-switcher';
import BgImage from '../../../assets/images/auth-bg.png';
import { LoginForm, Signup } from '../../components/forms';
import BackIcon from '../../../assets/icons/back-icon.png';
import { InputLabel, PrimaryButton, StandardInput } from '../../components/elements';

interface IProps {
    navigation: any
}
const RequestOtp: React.FC<IProps> = ({navigation}) => {
    
    const onPushBack = () => {
        navigation.navigate('login');
    }

    return (
        <View style={tw`h-full`}>
          <ImageBackground source={BgImage}  style={tw`h-full w-full bg-[#1B232A]`}>
          <View style={tw`py-[10%] px-[2%]`}>
           <AuthAppBar icon={<Image source={BackIcon}/>} label="Sign Up" onPress={onPushBack} />
           
           <View style={tw`p-4`}>
            <View>
             <Text style={tw`text-2xl font-bold text-white`}>Register with mobile</Text>
             <Text style={tw`text-[${theme.dark.colors.gray}] mt-4`}>Please type your number, then we’ll send a verification code for authentication.</Text>
            </View>

            <View style={tw`mt-10`}>
             <InputLabel  name='Mobile Number'/>
             <StandardInput secureTextEntry={false} placeholder="Enter your mobile" />
           </View>
           
           <View style={tw`mt-10`}>
               <PrimaryButton label='Send OTP' onPress={() => {}}/>
           </View>
           </View>

           

          </View>
        </ImageBackground>
        </View>
    )
}
export default RequestOtp;