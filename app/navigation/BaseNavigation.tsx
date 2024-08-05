import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTheme } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CharacterDetailsScreen from "../screens/CharacterDetailsScreen";
import CharactersScreen from "../screens/CharactersScreen";
import HouseDetailsScreen from "../screens/HouseDetailsScreen";
import HousesScreen from "../screens/HousesScreen";
import { AppThemeType } from "../utils/theme";

const Tab = createBottomTabNavigator();
const CharactorsStack = createStackNavigator();
const HousesStack = createStackNavigator();
const SpellsStack = createStackNavigator();

const CharactersScreenStack: React.FC = () => {
  return (
    <CharactorsStack.Navigator
      initialRouteName="CharactersScreen"
    >
      <CharactorsStack.Screen
        name='CharactersScreen'
        options={{ title: 'Characters', headerShown: false }}
        component={CharactersScreen}
      />
      <CharactorsStack.Screen
        name='CharacterDetailsScreen'
        component={CharacterDetailsScreen}
        // @ts-ignore
        options={({ route }) => ({ title: route?.params?.name, headerShown: false })}
      />
    </CharactorsStack.Navigator>
  );
};

const HousesScreenStack: React.FC = () => {
  return (
    <HousesStack.Navigator
      initialRouteName="HousesScreen"
    >
      <CharactorsStack.Screen
        name='HousesScreen'
        options={{ title: 'Houses', headerShown: false }}
        component={HousesScreen}
      />
      <CharactorsStack.Screen
        name='HouseDetailsScreen'
        component={HouseDetailsScreen}
        // @ts-ignore
        options={{ title: 'HouseDetailsScreen', headerShown: false }}
      />
    </HousesStack.Navigator>
  )
}

const BaseNavigation: React.FC = () => {
  const theme = useTheme<AppThemeType>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName='CharactersStack'
    >
      <Tab.Screen
        name='CharactersStack'
        component={CharactersScreenStack}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name={'account-multiple'}
              size={size}
              color={focused ? theme.colors.primary : theme.colors.onTertiary}
            />
          ),
          title: 'Characters',
        }}
      />

      <Tab.Screen
        name='HousesStack'
        component={HousesScreenStack}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name={'home'}
              size={size}
              color={focused ? theme.colors.primary : theme.colors.onTertiary}
            />
          ),
          title: 'Houses',
        }}
      />
    </Tab.Navigator>
  );
};

export default BaseNavigation;