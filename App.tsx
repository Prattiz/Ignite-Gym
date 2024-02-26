import { StatusBar } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from 'src/theme';
import { NativeBaseProvider, View } from 'native-base';

import { Loading } from '@components/loading';
import { SignIn } from 'src/Screens/Login/SignIn';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <NativeBaseProvider theme={ THEME }>
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />

      {
        fontsLoaded? 
          <SignIn/>
          :
          <Loading/>
      }
      
    </NativeBaseProvider>
  );
}

