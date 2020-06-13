import React, { useState } from 'react';
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { StatusBar, View } from 'react-native';
import { COLOR } from "react-native-material-ui";
import Routes from "./src/routes";
import Constants from 'expo-constants';

const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf')
  });
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
    <>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
      <View style={{ backgroundColor: COLOR.blue700, height: 24 + Constants.statusBarHeight }} />
      <Routes />
    </>
  );
}