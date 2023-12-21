import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigator, RootStackParams} from './Navigator';
import {SearchScreen} from '../screens/SearchScreen';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonScreen} from '../screens';

const Tab = createBottomTabNavigator();

const SearchTab = createStackNavigator<RootStackParams>();

export const SearchNavigator = () => {
  return (
    <SearchTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SearchTab.Screen name="Home" component={SearchScreen} />
      <SearchTab.Screen name="PokemonScreen" component={PokemonScreen} />
    </SearchTab.Navigator>
  );
};

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarActiveTintColor: '#5856d6',
        tabBarLabelStyle: {marginBottom: Platform.OS === 'ios' ? 0 : 10},
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Navigator}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="list-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="search-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
