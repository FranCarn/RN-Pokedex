import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, PokemonScreen} from '../screens';
import {SimplePokemon} from '../interfaces/pokemon';

export type RootStackParams = {
  Home: undefined;
  PokemonScreen: {pokemon: SimplePokemon; color: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: styles.cardStyle,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#fff',
  },
});
