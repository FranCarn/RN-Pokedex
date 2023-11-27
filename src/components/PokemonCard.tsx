import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemon';
import {FadeInImage} from './FadeInImage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigator/Navigator';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState<string>('grey');

  const isMounted = useRef(true);
  const navigator = useNavigation();

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {
      fallback: 'grey',
      cache: true,
      key: pokemon.picture,
    }).then(colors => {
      if (!isMounted.current) return;

      if (colors.platform === 'android') {
        setBgColor(colors.dominant || 'grey');
      }
      if (colors.platform === 'ios') {
        setBgColor(colors.background);
      } else {
        setBgColor(colors.dominant);
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigator.navigate('PokemonScreen', {pokemon, color: bgColor})
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {`\n#` + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokeballContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokeball}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    right: 0,
    opacity: 0.5,
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});
