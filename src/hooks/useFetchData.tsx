import { useEffect, useState } from 'react';

export const useFetchData = (gettingAdvice: boolean) => {
  const [currentAdvice, setCurrentAdvice] = useState({ advice: '', id: 0, isLoading: true });

  const URL = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    setCurrentAdvice({ advice: '', id: 0, isLoading: true });

    const getData = async (URL: string) => {
      const response = await fetch(URL);
      const data = await response.json();

      setCurrentAdvice({
        advice: data.slip.advice,
        id: data.slip.id,
        isLoading: false,
      });
    };

    getData(URL);
  }, [gettingAdvice]);

  return currentAdvice;
};
