import {useEffect, useRef} from 'react';
import {pokemonAPI} from '../api/pokemonAPI';
import {Pokedex} from '../interfaces/pokemon';

export const usePokemonPaginated = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=40';
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const getInitialData = async () => {
    const {data} = await pokemonAPI.get(nextPageUrl.current);

    console.log(data);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return {};
};
