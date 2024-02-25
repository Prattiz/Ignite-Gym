import { Spinner, Center, Text } from "@gluestack-ui/themed";


export function Loading(){
    return(
        <Center flex={1}>
            <Spinner size="large" />
        </Center>
    )
}