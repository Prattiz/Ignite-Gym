import { FlatList, HStack, Heading, Text, VStack } from "native-base";

import { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Header } from "@components/Home/Header";
import { Group } from "@components/Home/Group";
import { Card } from "@components/Home/Card";



export function Home(){

    const [ groups ] = useState(["costas", "ombro" , "perna" , "peito" , "triceps" , "biceps"]);
    const [ exercises, setExercises ] = useState(["1", "2" , "3" , "4", "5" ]);
    const [ groupSelectd, setGroupSelectd ] = useState("costas");

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleExercise(){
        navigation.navigate('exercise')
    }

    return(
        <VStack pb={20}>
            <Header/>

            <FlatList
                data={groups}
                keyExtractor={ item => item }
                horizontal

                renderItem={({ item }) => (
                    <Group
                        name={ item }
                        isActive={ groupSelectd === item }
                        onPress={() => setGroupSelectd(item)}
                    />
                )}

                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />


            <VStack px={8}>

                <HStack justifyContent="space-between" mb={5}>
                <Heading color="gray.200" fontSize="md" fontFamily="heading">
                    Exercícios
                </Heading>

                <Text color="gray.200" fontSize="sm">
                    {exercises.length}
                </Text>
                </HStack>
                
                <FlatList
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={ ({ item }) => <Card onPress={handleExercise}/> }
                    showsVerticalScrollIndicator={ false }
                />
            </VStack>
            
        </VStack>
    )
}