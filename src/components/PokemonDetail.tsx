import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {SinglePokemonFull} from '../interfaces/pokemon';
interface Props {
  pokemon: SinglePokemonFull;
}
export const PokemonDetail = ({pokemon}: Props) => {
  return (
    <ScrollView style={{...StyleSheet.absoluteFillObject}}>
      <View style={styles.container}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              key={type.name}
              style={{...styles.regularText, marginRight: 10}}>
              {type.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={{...styles.container, marginTop: 20}}>
        <Text style={styles.title}>Sprites</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 370,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  regularText: {
    fontSize: 19,
  },
});
