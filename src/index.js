import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import light from './themes/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Routes />
    </ThemeProvider>
  );
}
