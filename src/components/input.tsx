import { IInputProps, Input as NativeInput, FormControl } from 'native-base';

type Props = IInputProps & {
    errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest}: Props) {

    const invalid = !!errorMessage || isInvalid; 

    return(
        <FormControl isInvalid={invalid} mb={4}>
            <NativeInput
                bg="gray.700"
                h={14}
                px={4}
                borderRadius={0}
                fontSize="md"
                color="white"
                fontFamily="body"
                borderWidth={0}
                placeholderTextColor="gray.300"
                isInvalid={invalid}

                _invalid={{
                  borderWidth: 1,
                  borderColor: "red.500"
                }}

                _focus={{
                    bg:"gray.700",
                    borderWidth: 1,
                    borderColor:"green.500"
                }}

                {...rest}
            />

            <FormControl.ErrorMessage>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}