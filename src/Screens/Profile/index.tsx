import 
{ 
    Center, ScrollView, VStack, Skeleton, 
    Text, Heading, useToast 
} 
from "native-base";

import { ScreenHeader } from "@components/History/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import DefaultImage from '@assets/userPhotoDefault.png';

import { useState } from "react";

import * as FileSystem from 'expo-file-system';
import { FileInfo } from "expo-file-system";

import * as ImagePicker from 'expo-image-picker';

import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile(){

    const [ photoLoaded, setPhotoLoaded ] = useState(true);
    const [ userPhoto, setUserPhoto ] = useState('');


    const toast = useToast();

    async function handlePickImage(){

        setPhotoLoaded(false)
        try {

            const photoResponse = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
            });
    
            if(photoResponse.canceled) return ;

            
            const photoURI = photoResponse.assets[0].uri ; 

            if( photoURI ){

                const photoInfo = await FileSystem.getInfoAsync(photoURI) as FileInfo;

                if( photoInfo.size && (photoInfo.size  / 1024 / 1024 ) > 8 ){

                    return toast.show({
                    title: 'Essa imagem é muito grande. Escolha uma de até 5MB.',
                    placement: 'top',
                    bgColor: 'red.500'
                    });
                }

                setUserPhoto(photoURI);
            }
        
        } catch (error) {
            
        } finally{
            setPhotoLoaded(true)
        }
    }

    return(
        <VStack flex={1}>
            <ScreenHeader title="Perfil"/>
 
            <ScrollView>
                <Center mt={6} px={10}>
                {
                    photoLoaded ?
                        <VStack alignItems="center">
                            <UserPhoto 
                                source={{uri: userPhoto === '' ? undefined : userPhoto}}
                                defaultSource={ DefaultImage }
                                size={33}
                                alt="Foto de Usuário"
                            />
                            <TouchableOpacity onPress={handlePickImage}>
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
                                endColor="gray.600"    
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
                        <Heading fontSize="md" mb={5} color="gray.200" fontFamily="heading">Alterar senha</Heading>

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