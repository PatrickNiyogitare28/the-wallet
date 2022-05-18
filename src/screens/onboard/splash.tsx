import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import tw from 'twrnc';
import OnboardImage from '../../../assets/images/splash.png';
import OnboardVector from '../../../assets/images/get-started-vector.png';
import { PrimaryButton } from '../../components/elements';


const Splash = () => {

    return (
        <View>
            <ImageBackground source={OnboardImage} resizeMode="cover" style={tw`h-full w-full`}>
            </ImageBackground>
        </View>
    )
}

export default Splash;