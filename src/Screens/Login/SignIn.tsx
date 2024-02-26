import { VStack, Image, TextArea, Text, Center, Heading } from "native-base";

import BgImg from '@assets/background.png';
import Logo from '@assets/logo.svg';

export function SignIn(){
    return(
        <VStack flex={1} bg="gray.700">

            <Image 
                source={BgImg}
                resizeMode="contain"
                position='absolute'
                alt=""
            />

            <Center my={24}>  
                <Logo/>

                <Text 
                color="gray.100" 
                fontSize="sm"
                >
                    Treine sua mente e o seu corpo
                </Text>
            </Center>

            <Center>
                <Heading 
                    color="gray.100" 
                    fontSize="xl" 
                    mb={6} 
                    fontFamily="heading"
                >
                    Acesse sua conta
                </Heading>
            </Center>

        </VStack>
    );
}