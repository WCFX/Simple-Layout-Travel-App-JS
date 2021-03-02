import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';

import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import {
  Roboto_400Regular,
  Roboto_600SemiBold,
  Roboto_700Bold,
} from '@expo-google-fonts/nunito';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  Archivo_400Regular,
  Archivo_600SemiBold,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';

import Routes from './routes';

export default () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);
