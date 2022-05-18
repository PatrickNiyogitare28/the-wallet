import { FC } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';

const Onboard: FC = () => {
    return (
        <View style={tw`h-full justify-around items-center bg-[${theme.dark.colors.primary}]`}>
            <Text>Onboard</Text>
        </View>
    )
}

export default Onboard;