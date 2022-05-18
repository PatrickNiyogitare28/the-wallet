import React from 'react';
import {Text} from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';

interface IProps {
    name: string
}
const InputLabel : React.FC<IProps> = ({name}) => {
    return (
        <Text style={tw`text-[15px] text-[${theme.dark.colors.gray}]`}>{name}</Text>
    )
}

export default InputLabel;