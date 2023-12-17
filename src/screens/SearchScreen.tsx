import React from 'react';
import {Platform, Text, View, FlatList, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList} = usePokemonSearch();

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
      />
      <FlatList
        data={simplePokemonList}
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
            Pokedex
          </Text>
        }
      />
    </View>
  );
};
