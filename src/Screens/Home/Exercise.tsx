import { HStack, Heading, Icon, Text, VStack, Image, Box, ScrollView } from "native-base";

import { TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

import BodySvg from '../../assets/body.svg';
import WeightSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';

import { Button } from '@components/Button';

import { useNavigation } from "@react-navigation/native";

export function Exercise(){

    const navigation = useNavigation()

    function handleGoBack(){
        navigation.goBack()
    }

    return(
       <VStack>
         <VStack>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon
                        as={Feather}
                        name="arrow-left"
                        color="green.500"
                        size={6}
                    />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={7} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" flexShrink={1} fontFamily="heading">Puxada Frontal</Heading>

                    <HStack alignItems="center">
                        <BodySvg/>
                        <Text color="gray.200" ml={1} textTransform="capitalize">costas</Text>
                    </HStack>

                </HStack>
            </VStack>
        </VStack>

        <ScrollView>
            <VStack p={8}>
                <Image
                    w="full"
                    h={80}
                    source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMVV_bsEttU6V4-3o9T5j5d7AZtJdxM6N1Q&usqp=CAU"}}
                    alt=""
                    mb={3}
                    resizeMode="cover"
                    rounded="lg"
                />

                <Box bg="gray.600" rounded="md" pb={4} px={4}>
                    <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
                        <HStack>
                        <WeightSvg />
                        <Text color="gray.200" ml="2">
                            3 séries
                        </Text>
                        </HStack>

                        <HStack>
                        <RepetitionsSvg />
                        <Text color="gray.200" ml="2">
                            12 repetições
                        </Text>
                        </HStack>
                    </HStack>

                    <Button 
                        title="Marcar como realizado"
                    />
                </Box>
            </VStack>
        </ScrollView>

       </VStack>
    )
}