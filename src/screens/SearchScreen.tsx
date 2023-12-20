import React, {useEffect, useState} from 'react';
import {Platform, Text, View, FlatList, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemon';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList} = usePokemonSearch();

  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (!term) return setPokemonFiltered([]);

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(pokemon =>
          pokemon.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(
        pokemon => pokemon.id === term,
      );
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  if (isLoading) return <Loading />;

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 25,
        }}
        onDebounce={value => setTerm(value)}
      />
      <FlatList
        data={pokemonFiltered}
        keyExtractor={({id}) => id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 50 : top + 80,
            }}>
            {term}
          </Text>
        }
      />
    </View>
  );
};
