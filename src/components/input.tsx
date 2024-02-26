import { IInputProps, Input as NativeInput } from 'native-base';

export function Input({...rest}: IInputProps) {
    return(
        <NativeInput
            bg="gray.700"
            h={14}
            px={4}
            borderRadius={0}
            fontSize="md"
            color="white"
            fontFamily="body"
            mb={4}
            borderWidth={0}
            placeholderTextColor="gray.300"
            _focus={{
                bg:"gray.700",
                borderWidth: 1,
                borderColor:"green.500"
            }}
            {...rest}
        />
    );
}