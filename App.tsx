// this must be the first import
import 'react-native-gesture-handler';
// *****

import { NavigationContainer } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Appearance } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import BaseNavigation from './app/navigation/BaseNavigation';
import { ToastProvider } from './app/providers/toastProvider';
import { darkTheme, lightTheme } from './app/utils/theme';

export default function App() {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode],
  );

  return (
    <PaperProvider theme={theme}>
      <ToastProvider>
        <NavigationContainer>
          <BaseNavigation />
        </NavigationContainer>
      </ToastProvider>
    </PaperProvider>
  );
}
