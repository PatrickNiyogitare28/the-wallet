import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';
import { InputLabel, SocialMediaButton, StandardInput } from '../elements';
import PrimaryButton from '../elements/primary-button';
import FacebookIcon from '../../../assets/icons/fb-icon.png';
import GoogleIcon from '../../../assets/icons/google-icon.png';

const Signup: React.FC = () => {
    return (
        <View style={tw`mt-2`}>
            <Text style={tw`text-white text-2xl font-bold`}>Sign up</Text>

            <View style={tw`mt-4`}>
                <InputLabel name='Email' />
                <StandardInput
                    placeholder='Enter your email'
                    secureTextEntry={false}
                />
            </View>

            <View style={tw`mt-4`}>
                <InputLabel name='Password' />
                <StandardInput
                    placeholder='Enter your password'
                    secureTextEntry={true}
                />
            </View>


            <View style={tw`items-center`}>
                <PrimaryButton label='Sign up' onPress={() => {}} />
            </View>

            <View style={tw`items-center my-4`}>
                <Text style={tw`text-[${theme.dark.colors.gray}]`}>Or Signup with</Text>
            </View>

            <View style={tw`flex-row justify-between`}>
                <View style={tw`w-[45%]`}>
                    <SocialMediaButton
                        label='Facebook'
                        icon={<Image source={FacebookIcon} />}
                    />
                </View>
                <View style={tw`w-[45%]`}>
                    <SocialMediaButton
                        label='Google'
                        icon={<Image source={GoogleIcon} />}
                    />
                </View>

            </View>
        </View>
    )
}
export default Signup;