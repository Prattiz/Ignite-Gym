import { StatusBar } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { GluestackUIStyledProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import { Loading } from '@components/Loading';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <GluestackUIStyledProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />

      <Loading/>
      
    </GluestackUIStyledProvider>
  );
}

