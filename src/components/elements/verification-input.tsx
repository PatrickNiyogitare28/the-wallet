import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';

interface IProps {
    placeholder: string,
    secureTextEntry: boolean,
    onChange: Function
}

const VerificationInput: React.FC<IProps> = ({placeholder, secureTextEntry=false, onChange}) => {
    return (
       <View style={tw`bg-[${theme.dark.colors.darkGreen}] p-2 rounded-xl mt-4 w-[60px] h-[60px] items-center`}>
           <TextInput 
             placeholder={placeholder}
             secureTextEntry={secureTextEntry}
             keyboardType={"number-pad"}
             maxLength={1}
             style={tw`text-white text-2xl`}
             placeholderTextColor="gray"
             onChange={() => onChange()}
             blurOnSubmit={true}
           />
       </View>
    )
}

export default VerificationInput;