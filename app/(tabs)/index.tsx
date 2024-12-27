import React from 'react';
import Home from '../pages/Home'
import { DefaultTheme, configureFonts, PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from '../pages/store';
import { fonts } from '../pages/styles/theme.json'


const theme = {
  ...DefaultTheme,
  fonts: configureFonts({
    ios: fonts,
    android: fonts,
  })
}

export default function HomeScreen() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    </StoreProvider>
  );
}