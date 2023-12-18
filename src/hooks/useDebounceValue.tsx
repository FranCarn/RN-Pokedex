import React, {useEffect, useState} from 'react';

export const useDebounceValue = (input: string = '', time: number = 500) => {
  const [devouncedValue, setDevouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDevouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return devouncedValue;
};
