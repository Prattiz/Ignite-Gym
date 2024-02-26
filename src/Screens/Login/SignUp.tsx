import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import BgImg from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from "@components/input";
import { Button } from "@components/button";

export function SignUp(){
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={ false }>
            
            <VStack flex={1} bg="gray.700" px={10}>

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
                    Crie sua conta
                </Heading>

                <Input 
                    placeholder="Name"
                />

                <Input 
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Input 
                    placeholder="Senha"
                    secureTextEntry
                />

                <Input 
                    placeholder="Confirmar a Senha"
                    secureTextEntry
                />

                <Button title="Criar e acessar"/>
            </Center>

            <Button 
                title="Voltar para o login" 
                variant="outline" 
                mt={24}
            />
      
            </VStack>
        </ScrollView>
    );
}