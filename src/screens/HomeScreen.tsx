import React from 'react';
import {Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {} from 'react-native-gesture-handler';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList, getInitialData} = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={({id}) => id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <>
            <Image
              source={{uri: item.picture}}
              style={{width: 100, height: 100}}
            />
            <Text>{item.name}</Text>
          </>
        )}
        // infinite scroll
        onEndReached={getInitialData}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
      {/* <Text style={{...styles.title, ...styles.globalMargin, top: top + 20}}> */}
      {/* Pokedex
      </Text> */}
    </>
  );
};
