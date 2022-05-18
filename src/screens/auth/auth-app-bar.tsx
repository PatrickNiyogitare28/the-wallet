import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';

interface IProps {
    icon: JSX.Element,
    label?: string,
    onPress: Function
}
const AuthAppBar: React.FC<IProps> = ({icon, label, onPress}) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
        <View style={tw`flex-row items-center`}>
           {icon}
           <Text style={tw`text-[15px] ml-2 text-white font-bold`}>{label}</Text>
        </View>
        </TouchableOpacity>
    )
}
export default AuthAppBar;