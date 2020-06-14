import React, { useState } from 'react';
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { StatusBar, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from "./src/routes";
import Constants from 'expo-constants';

const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf')
  });
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2196F3',
    accent: '#FFC107',
  },
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)} />
    );
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
      <View style={{ backgroundColor: "#1976D2", height: Constants.statusBarHeight }} />
      <Routes />
    </PaperProvider>
  );
}