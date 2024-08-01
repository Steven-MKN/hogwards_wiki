import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTheme } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CharacterDetailsScreen from "../screens/CharacterDetailsScreen";
import CharactersScreen from "../screens/CharactersScreen";
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
        options={{ title: 'Characters' }}
        component={CharactersScreen}
      />
      <CharactorsStack.Screen
        name='CharacterDetailsScreen'
        component={CharacterDetailsScreen}
        // @ts-ignore
        options={({ route }) => ({ title: route?.params?.name })}
      />
    </CharactorsStack.Navigator>
  );
};

const BaseNavigation: React.FC = () => {
  const theme = useTheme<AppThemeType>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName='CharactersScreen'
    >
      <Tab.Screen
        name='CharactersScreen'
        component={CharactersScreenStack}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name={'home'}
              size={size}
              color={focused ? theme.colors.primary : theme.colors.onTertiary}
            />
          ),
          title: 'Characters',
        }}
      />
    </Tab.Navigator>
  );
};

export default BaseNavigation;