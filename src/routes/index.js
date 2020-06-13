import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Wallet from '../screens/Wallet';
import Pay from '../screens/Pay';

import PayButton from '../components/PayButton';

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },

  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },

  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },

  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

export default function Routes({ theme }) {
  const {
    backgroundColor,
    borderTopColor,
    activeTintColor,
    inactiveTintColor,
  } = theme.colors.tabBar;

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            if (route.name === 'Pay') return <PayButton focused={focused} />;

            const { lib: Icon, name } = icons[route.name];
            return <Icon name={name} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor,
            borderTopColor,
          },
          activeTintColor,
          inactiveTintColor,
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            title: 'Início',
          }}
        />

        <Screen
          name="Wallet"
          component={Wallet}
          options={{
            title: 'Carteira',
          }}
        />

        <Screen
          name="Pay"
          component={Pay}
          options={{
            title: '',
          }}
        />

        <Screen
          name="Notifications"
          component={Home}
          options={{
            title: 'Notificações',
          }}
        />

        <Screen
          name="Settings"
          component={Home}
          options={{
            title: 'Ajustes',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
