import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';

interface IProps {
    showLogin: boolean,
    setShowLogin: Function
}
const TabSwitch: React.FC<IProps>  = ({showLogin=false, setShowLogin}) => {
    return (
        <View style={tw`w-full bg-[${theme.dark.colors.darkGreen}] p-1 flex-row justify-between rounded-xl`}>
            <Pressable 
            style={tw`p-3 w-[50%] rounded-xl  bg-[${(showLogin) ? theme.dark.colors.switch : theme.dark.colors.darkGreen}]`}
            onPress={() => setShowLogin(true)}>
            <View>
                <Text style={tw`text-center text-[#C1C7CD]`}>Sign in</Text>
            </View>
            </Pressable>
            <Pressable 
            style={tw`p-3 w-[50%] rounded-xl  bg-[${(!showLogin) ? theme.dark.colors.switch : `${theme.dark.colors.darkGreen}`}]` }
            onPress={() => setShowLogin(false)}>
            <View >
                <Text style={tw`text-center text-[#777777]`}>Sign up</Text>
            </View>
            </Pressable>
        </View>
    )
}
export default TabSwitch;