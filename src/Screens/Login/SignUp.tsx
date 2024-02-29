import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import BgImg from '@assets/background.png';
import Logo from '@assets/logo.svg';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";


import { useForm, Controller } from "react-hook-form";

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
}

export function SignUp(){

    const { control, handleSubmit, formState:{ errors } } = useForm<FormDataProps>();

    const navigation = useNavigation();

    function handleGoBack({ data }: any){
        navigation.goBack()
    }

    function handleSignUp(){
    }

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={ false }>
            
            <VStack flex={1} px={10}>

            <Image 
                defaultSource={BgImg}
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

                <Controller 
                    control={control}
                    name="name"
                    
                    rules={{
                        required: 'Informe o nome...'
                    }}
                    
                    render={({ field: { onChange, value }}) => (
                        <Input 
                            placeholder="Name"
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />

                
                <Controller 
                    control={control}
                    name="email"
                    
                    rules={{
                        required: 'Informe seu e-mail...',
                        pattern: {
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail inválido'
                        }
                    }}

                    render={({ field: { onChange, value }}) => (
                        <Input 
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                

                <Controller 
                    control={control}
                    name="password"
                    rules={{
                        required: 'Insira sua senha...'
                    }}
                    render={({ field: { onChange, value }}) => (
                        <Input 
                            placeholder="Senha"
                            secureTextEntry
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="confirm_password"
                    rules={{
                        required: 'Confirme sua senha...'
                    }}
                    render={({ field: { onChange, value }}) => (
                        <Input 
                            placeholder="Confirmar a Senha"
                            secureTextEntry
                            onChangeText={onChange}
                            value={value}
                            onSubmitEditing={handleSubmit(handleSignUp)}
                            returnKeyType="send"
                        />
                    )}
                />

            
                <Button title="Criar e acessar" onPress={handleSubmit(handleSignUp)}/>
            </Center>

            <Button 
                title="Voltar para o login" 
                variant="outline" 
                mt={24}
                onPress={handleGoBack}
            />
      
            </VStack>
        </ScrollView>
    );
}