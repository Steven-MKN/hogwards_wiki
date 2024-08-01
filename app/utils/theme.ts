import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';

type HexColor = `#${string}`;

type LinearGradientType =
  `linear-gradient(${number}deg, ${HexColor} ${number}%, ${HexColor} ${number}%)`;

export type AppThemeType = MD3Theme & {
  colors: {
    warningHighlight: HexColor | LinearGradientType;
    errorHighlight: HexColor | LinearGradientType;
  };
  mainScreenPadding: number;
};

export const darkTheme: AppThemeType = {
  ...MD3DarkTheme,
  roundness: 45,
  colors: {
    ...MD3DarkTheme.colors,
    // @ts-ignore
    warningHighlight: '#ffac07',
    errorHighlight: '#ff0707',
    primary: '#c24332',
    onPrimary: '#fff',
    secondary: '#2e303f',
    onSecondary: '#fff',
    tertiary: '#63948c',
    onTertiary: '#fff',
    surface: '#2e303f',
    onSurface: '#fff',
    background: '#2e303f',
    onBackground: '#fff',
  },
  // @ts-ignore
  roundness: 45,
  mainScreenPadding: 16,
};

export const lightTheme: AppThemeType = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // @ts-ignore
    warningHighlight: '#ffac07',
    errorHighlight: '#ff0707',
    primary: '#c24332',
    onPrimary: '#fff',
    secondary: '#2e303f',
    onSecondary: '#fff',
    tertiary: '#63948c',
    onTertiary: '#fff',
    surface: '#ebe6d1',
    onSurface: '#63948c',
    background: '#fff',
    onBackground: '#2e303f',
  },
  roundness: 45,
  mainScreenPadding: 16,
};
