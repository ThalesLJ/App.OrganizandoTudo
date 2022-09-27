import {
  StatusBar,
  SafeAreaView,
  View
} from 'react-native';
import Strings from './src/strings/strings';
import Login from './src/pages/Login/index';
import Home from './src/pages/Home/index';

import AppLoading from 'expo-app-loading';

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
    <SafeAreaView>
      <StatusBar />
      <Login {...Strings} />
    </SafeAreaView>
  );
}
