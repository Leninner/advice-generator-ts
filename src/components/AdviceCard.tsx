import { GetNewAdvice } from './GetNewAdvice';
import { useFetchData } from '../hooks/useFetchData';
import { useState } from 'react';

export const AdviceCard = () => {
  const [gettingAdvice, setGettingAdvice] = useState(true);
  const handleClick = () => setGettingAdvice(!gettingAdvice);
  const { advice, id, isLoading } = useFetchData(gettingAdvice);

  return (
    <div className='bg-[#323A49] w-5/6 h-80 rounded-lg shadow-2xl shadow-black flex justify-center items-center flex-col font-[Manrope] font-normal relative cursor-default md:w-5/12 md:h-72'>
      {isLoading ? (
        <p className='font-bold text-white'>Loading...</p>
      ) : (
        <>
          <span className='text-[#52FFA8]'>Advice #{id}</span>
          <blockquote className='w-3/4 py-5 text-center border-b border-[#4E5D73]'>
            <p className='text-xl font-bold text-[#CEE3E9] '>"{advice}"</p>
          </blockquote>
          <GetNewAdvice onClick={handleClick} />
        </>
      )}
    </div>
  );
};
