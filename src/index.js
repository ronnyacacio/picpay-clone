import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

import Routes from './routes';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';

export default function App() {
  const [theme, setTheme] = useState(darkTheme);

  const persistTheme = useCallback(async (themeToPersist) => {
    setTheme(themeToPersist === 'light' ? lightTheme : darkTheme);
    await AsyncStorage.setItem('theme', themeToPersist);
  }, []);

  useEffect(() => {
    async function getPersistedTheme() {
      const persistedTheme = await AsyncStorage.getItem('theme');

      if (persistedTheme) {
        setTheme(persistedTheme === 'light' ? lightTheme : darkTheme);
      }
    }

    getPersistedTheme();
  }, []);

  const toggleTheme = useCallback(() => {
    persistTheme(theme.title === 'light' ? 'dark' : 'light');
  }, [theme.title, persistTheme]);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={theme.title === 'light' ? 'dark-content' : 'light-content'}
        translucent={true}
        backgroundColor="transparent"
      />
      <Routes toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
