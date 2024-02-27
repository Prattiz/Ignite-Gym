import { Center, ScrollView, VStack, Skeleton, Text, Heading } from "native-base";

import { ScreenHeader } from "@components/History/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

import DefaultImage from '@assets/userPhotoDefault.png';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile(){

    const [ photoLoaded, setPhotoLoaded ] = useState(true);

    return(
        <VStack flex={1}>
            <ScreenHeader title="Perfil"/>
 
            <ScrollView>
                <Center mt={6} px={10}>
                {
                    photoLoaded ?
                        <VStack alignItems="center">
                            <UserPhoto 
                                source={DefaultImage}
                                size={33}
                                alt="Foto de Usuário"
                            />
                            <TouchableOpacity>
                                <Text 
                                    color="green.500" 
                                    fontWeight="bold" 
                                    fontSize="md" 
                                    mt={2} mb={8}
                                >
                                    Alterar foto
                                </Text>
                            </TouchableOpacity>
                        </VStack> 
                        :
                            <Skeleton
                                w={33}
                                h={33} 
                                mb={8}
                                rounded="full"
                                startColor="gray.400"
                                endColor="gray.500"    
                            />
                }

                    <Input
                        placeholder="Nome"
                        bg="gray.600"
                    />

                    <Input
                        value="example@gmail.com"
                        isDisabled
                        bg="gray.600"
                    />

                    <VStack mt={12} mb={8} w="full">
                        <Heading fontSize="md" mb={5} color="gray.200">Alterar senha</Heading>

                        <Input
                            placeholder="Senha antiga"
                            secureTextEntry
                            bg="gray.600"
                        />

                        <Input
                            placeholder="Senha nova"
                            secureTextEntry
                            bg="gray.600"
                        />

                        <Input
                            placeholder="Confirme nova senha"
                            secureTextEntry
                            bg="gray.600"
                        />

                        <Button
                            title="Atualizar"
                            mt={4}
                            justifyContent="center"
                        />
                    </VStack>
                </Center>
            </ScrollView>
            
        </VStack>
    )
}