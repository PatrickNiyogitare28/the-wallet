import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';
import CloseIcon from '../../../assets/icons/close-icon.png'

const AuthAppBar = () => {
    return (
        <View style={tw``}>
            <Image source={CloseIcon} />
        </View>
    )
}
export default AuthAppBar;