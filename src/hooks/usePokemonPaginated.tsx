import {useEffect, useRef, useState} from 'react';
import {pokemonAPI} from '../api/pokemonAPI';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../interfaces/pokemon';

export const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const getInitialData = async () => {
    setIsLoading(true);
    const {data} = await pokemonAPI.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = data.next;
    mapPokemonListToSimplePokemon(data.results);
  };

  const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {
        id,
        name,
        picture,
      };
    });

    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return {isLoading, simplePokemonList, getInitialData};
};
