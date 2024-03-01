import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import BgImg from '@assets/background.png';
import Logo from '@assets/logo.svg';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


type FormDataProps = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
}

const signUpSchema = yup.object({

    name: yup.string().required('Informe o nome...'),
    email: yup.string().required('Informe seu e-mail...').email('E-mail inválido'),

    password: yup.string()
        .required('Informe a senha')
        .min( 8 , 'A senha deve ter pelo menos 8 dígitos.'),

    confirm_password: yup.string()
        .required('Confirme sua senha.')
        .oneOf([yup.ref('password'), ''], 'A confirmação da senha não confere'),

});

type FormData = yup.InferType<typeof signUpSchema> ;


export function SignUp(){

    const { control, handleSubmit, formState:{ errors } } = useForm<FormData>({

        resolver: yupResolver(signUpSchema)
    });

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack()
    }

    function handleSignUp({ name, email, password, confirm_password }: FormDataProps){
        console.log({ name, email, password, confirm_password })
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
                    
                    render={({ field: { onChange, value }}) => (
                        <Input 
                            placeholder="Name"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={ errors.name?.message }
                        />
                    )}
                />

                
                <Controller 
                    control={control}
                    name="email"

                    render={({ field: { onChange, value }}) => (
                        <Input 
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            errorMessage={ errors.email?.message }
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                

                <Controller 
                    control={control}
                    name="password"
                    
                    render={({ field: { onChange, value }}) => (
                        <Input 
                            placeholder="Senha"
                            secureTextEntry
                            errorMessage={ errors.password?.message }
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="confirm_password"
        
                    render={({ field: { onChange, value }}) => (
                        <Input 
                            placeholder="Confirmar a Senha"
                            secureTextEntry
                            onChangeText={onChange}
                            value={value}
                            errorMessage={ errors.confirm_password?.message }
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
                mt={12}
                onPress={handleGoBack}
            />
      
            </VStack>
        </ScrollView>
    );
}