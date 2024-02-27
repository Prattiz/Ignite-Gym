import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "src/Screens/Login/SignIn";
import { SignUp } from "src/Screens/Login/SignUp";


type RoutesProps = {
    signIn: undefined,
    signUp: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<RoutesProps> ;

const { Navigator, Screen } = createNativeStackNavigator<RoutesProps>();

export function AuthRoutes(){

    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
                name="signIn"
                component={SignIn}
            />

            <Screen
                name="signUp"
                component={SignUp}
            />
        </Navigator>
    )
}