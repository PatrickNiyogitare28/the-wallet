import { FC } from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../core/theme/colors';
import OnboardImage from '../../../assets/images/onboard-bg.png';
import OnboardImage1 from '../../../assets/images/onboard-vector-1.png';
import OnboardImage2 from '../../../assets/images/onboard-vector-2.png';
import OnboardImage3 from '../../../assets/images/onboard-vector-3.png';
import { useState } from 'react';

interface IHighright {
    title: string,
    description: string,
    image: JSX.Element,
}
const Onboard: FC = () => {
    const [activeHighright, setActiveHighright] = useState(0)
    const highrights: Array<IHighright> = [
        {
            title: 'Trade anytime anywhere',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            image: <Image source={OnboardImage1} />
        },
        {
            title: 'Save and invest at the same time',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            image: <Image source={OnboardImage2} />
        },
        {
            title: 'Transact fast and easy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            image: <Image source={OnboardImage3} />
        }
    ];

    const handleOnNext = () => {
        if(activeHighright < 2){
            setActiveHighright(activeHighright + 1)
        }
    }
    return (
        <View>
            <ImageBackground source={OnboardImage} resizeMode="cover" style={tw`h-full w-full`}>
                <View style={tw`p-[5%] pt-[20%]`}>
                    {highrights.map(({ title, description, image }: IHighright, index: number) => (
                        <View key={index.toString()}>
                            {(activeHighright === index) &&

                                <View style={tw`justify-around items-center`}>
                                    {image}
                                    <Text style={tw`text-white mt-2 text-xl`}>{title}</Text>
                                    <Text style={tw`text-[${theme.dark.colors.textTheme}] text-center mt-4`}>{description}</Text>
                                </View>
                            }
                           
                        </View>
                    ))}
                    <View style={tw`items-center my-[10%]`}>
                    <View style={tw`flex-row justify-around w-[15%]`}>
                    {highrights.map((_, index: number) => (
                        <View key={index.toString()} style={tw`p-[5px] rounded-full 
                        ${(index === activeHighright) ? 'bg-white' : 'bg-gray-600'}`}>
                                
                        </View>
                    ))}
                    </View>
                    </View>

                    <View style={tw`items-center`}>
                        <Pressable style={tw`bg-[${theme.dark.colors.primary}] py-4 px-20 rounded-xl`}
                          onPress={handleOnNext}
                        >
                            <Text>Next</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Onboard;