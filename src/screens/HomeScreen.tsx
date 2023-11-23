import React from 'react';
import {Text, Image} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {} = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <Text style={{...styles.title, ...styles.globalMargin, top: top + 20}}>
        Pokedex
      </Text>
    </>
  );
};
