import React from 'react';
import { Pressable, TouchableOpacity, View, Text } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';

interface IProps {
    label: string,
    icon: JSX.Element
}
const SocialMedialButton: React.FC<IProps> = ({label, icon}) => {
    return (
        <View style={tw`py-3 px-6 bg-[${theme.dark.colors.softWhite}]  items-center mt-6 rounded-xl`}>
            <TouchableOpacity style={tw`w-full`}>
                <View style={tw`flex-row justify-around items-center`}>
                {icon}
                <Text style={tw`ml-1`}>{label}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SocialMedialButton;