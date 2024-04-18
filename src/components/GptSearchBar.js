import React, { useEffect } from 'react';
import { BACKROUNDIMG } from '../utils/constants';
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
 console.log(langKey);
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="absolute inset-0 z-0">
        <img
          src={BACKROUNDIMG}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <form className="bg-gray-900/80 rounded-lg shadow-lg p-8 w-full max-w-md z-10 mt-[-300px]">
        <div className="flex items-center border-b border-gray-600 py-2">
          <input
            type="text"
            className="bg-transparent text-white placeholder-gray-400 w-full focus:outline-none"
            placeholder={lang[langKey]?.gptSearchPlaceholder}
          />
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
          {lang[langKey]?.search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;