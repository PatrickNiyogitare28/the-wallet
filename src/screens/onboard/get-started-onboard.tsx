import { FC, useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import tw from 'twrnc';
import OnboardImage from '../../../assets/images/get-started-bg.png';
import OnboardVector from '../../../assets/images/get-started-vector.png';
import { PrimaryButton } from '../../components/elements';

type Props = NativeStackScreenProps<any>;

const GetStartedOnboard = ({ navigation }: Props) => {

    return (
        <View>
            <ImageBackground source={OnboardImage} resizeMode="cover" style={tw`h-full w-full`}>
                <View style={tw`p-[5%] pt-[20%]`}>
                    <View>
                        <View style={tw`justify-around items-center`}>
                            <Image source={OnboardVector} style={tw`mt-6`} />
                            <Text style={tw`text-white mt-6 text-2xl font-bold`}>Your account has been successfully created!</Text>
                        </View>
                    </View>
                
                <View style={tw`mt-6`}>
                    <PrimaryButton label='Get started' onPress={() => {}} />
                </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default GetStartedOnboard;