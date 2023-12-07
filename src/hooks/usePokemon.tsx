import React, {useState} from 'react';
import {SinglePokemonFull} from '../interfaces/pokemon';
import {pokemonAPI} from '../api/pokemonAPI';
import {useEffect} from 'react';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<SinglePokemonFull>();

  const getInitialData = async () => {
    try {
      const {data} = await pokemonAPI.get<SinglePokemonFull>(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      setPokemon(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
