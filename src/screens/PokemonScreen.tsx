import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RootStackParams} from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route: {params}}: Props) => {
  const {
    pokemon: {id, name, picture},
    color,
  } = params;
  return (
    <View>
      <Text style={{backgroundColor: color}}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
