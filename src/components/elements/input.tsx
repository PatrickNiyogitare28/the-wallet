import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';

interface IProps {
    placeholder: string,
    secureTextEntry: boolean
}

const StandardInput: React.FC<IProps> = ({placeholder, secureTextEntry=false}) => {
    return (
       <View style={tw`bg-[${theme.dark.colors.darkGreen}] p-4 rounded-xl mt-4`}>
           <TextInput 
             placeholder={placeholder}
             secureTextEntry={secureTextEntry}
             style={tw`text-white`}
             placeholderTextColor="gray"
           />
       </View>
    )
}

export default StandardInput;