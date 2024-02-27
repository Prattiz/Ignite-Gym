import { UserPhoto } from "@components/UserPhoto";
import { HStack, Heading, Text, VStack, Icon } from "native-base";
import DefaultImage from '@assets/userPhotoDefault.png'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export function Header(){
    
    return(
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">

            <UserPhoto
                size={16}
                source={ DefaultImage }
                alt="Imagem de usuário"
            />

            <VStack ml={4} flex={1}>
                <Text color="gray.100" fontSize="md">Olá,</Text>
                <Heading color="gray.100"  fontSize="md">Thiago Pratti</Heading>
            </VStack>

            <TouchableOpacity>
                <Icon
                    as={MaterialIcons}
                    name="logout" 
                    color="gray.200"
                    size={7}
                />
            </TouchableOpacity>
        </HStack>
    )
}