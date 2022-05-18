import React from 'react';
import { Pressable, TouchableOpacity, View, Text } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';

interface IProps {
    label: string,
    onPress: Function
}
const PrimaryButton: React.FC<IProps> = ({label,onPress}) => {
    return (
        <View style={tw`p-4 bg-[${theme.dark.colors.primary}] w-5/5 items-center mt-6 rounded-xl`}>
            <TouchableOpacity onPress={() => onPress()}>
                <Text>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default PrimaryButton;