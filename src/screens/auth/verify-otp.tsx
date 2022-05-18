import React, { useState } from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';
import AuthAppBar from './auth-app-bar';
import TabSwitch from './tab-switcher';
import BgImage from '../../../assets/images/auth-bg.png';
import { LoginForm, Signup } from '../../components/forms';
import BackIcon from '../../../assets/icons/back-icon.png';
import { InputLabel, PrimaryButton, StandardInput } from '../../components/elements';
import VerificationInput from '../../components/elements/verification-input';

interface IProps {
    navigation: any
}
const VerifyOtp: React.FC<IProps> = ({navigation}) => {
    
    const onPushBack = () => {
        navigation.navigate('otp');
    }

    return (
        <View style={tw`h-full`}>
          <ImageBackground source={BgImage}  style={tw`h-full w-full bg-[#1B232A]`}>
          <View style={tw`py-[10%] px-[2%]`}>
           <AuthAppBar icon={<Image source={BackIcon}/>} label="Verification" onPress={onPushBack} />
           
           <View style={tw`p-4`}>
            <View>
             <Text style={tw`text-2xl font-bold text-white`}>Enter your code</Text>
             <Text style={tw`text-[${theme.dark.colors.gray}] mt-4`}>Please enter the code we sent to</Text>
             <Text style={tw`text-[${theme.dark.colors.primary}] mt-4`}>+250 785 436 974</Text>

            </View>
            <View style={tw`mt-10 flex-row justify-between w-5/5`}>
            {Object.keys([0,1,2,3]).map((_, index: number) => (
                <VerificationInput key={index.toString()} secureTextEntry={false} placeholder="-" onChange={() => {}}/>            
            ))}
           </View>

           <View style={tw`items-center mt-6`}>
               <Text style={tw`text-[${theme.dark.colors.gray}]`}>Resend code (30)</Text>
               <TouchableOpacity style={tw`mt-2`}>
                   <Text style={tw`text-[${theme.dark.colors.primary}]`}>Resend Link</Text>
               </TouchableOpacity>
           </View>
           
           <View style={tw`mt-10`}>
               <PrimaryButton label='Continue' onPress={() => navigation.navigate('get-started-onboard')}/>
           </View>
           </View>

           

          </View>
        </ImageBackground>
        </View>
    )
}
export default VerifyOtp;