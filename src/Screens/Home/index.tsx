import { Center, FlatList, HStack, Text, VStack } from "native-base";

import { Header } from "@components/Home/Header";
import { Group } from "@components/Home/Group";
import { useState } from "react";


export function Home(){

    const [ groups ] = useState(["costas", "ombro" , "perna" , "peito" , "triceps" , "biceps"]);
    const [ groupSelectd, setGroupSelectd ] = useState("costas")

    return(
        <VStack>
            <Header/>

            <FlatList
                data={groups}
                keyExtractor={ item => item }
                horizontal

                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={ groupSelectd === item }
                        onPress={() => setGroupSelectd(item)}
                    />
                )}

                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
            />
            
        </VStack>
    )
}