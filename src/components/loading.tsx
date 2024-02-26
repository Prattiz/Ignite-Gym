import { Spinner, Center } from "native-base";


export function Loading(){
    return(
        <Center flex={1} backgroundColor="gray.400">
            <Spinner size="large" />
        </Center>
    )
}