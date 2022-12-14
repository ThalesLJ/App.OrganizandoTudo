import {
  StatusBar,
  SafeAreaView
} from 'react-native';

import AppLoading from 'expo-app-loading';

import Login from './src/pages/Login/index';
import Home from './src/pages/Home/index';

import Strings from './src/strings/strings';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';

export default function App() {

  const [fontsLoaded] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Home {...Strings} />
    </SafeAreaView>
  );
}
