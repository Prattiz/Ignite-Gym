import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";

import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {

};

export function Card({ ...rest }: Props) {
    return (
        <TouchableOpacity { ...rest }>
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}> 

                <Image
                    source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMVV_bsEttU6V4-3o9T5j5d7AZtJdxM6N1Q&usqp=CAU"}}
                    alt="Imagem do exercicio"
                    w={16}
                    h={16}
                    resizeMode="center"
                    rounded="md"
                />

                <VStack ml={4} flex={1}>
                    <Heading fontSize="lg" color="white">Remada Unilateral</Heading>

                    <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>3 series x 12 repetições</Text>
                </VStack>

                <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
            </HStack>
        </TouchableOpacity>
    )
}