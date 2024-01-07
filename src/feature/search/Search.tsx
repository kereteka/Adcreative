import React, { useCallback, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { getData } from './api';
import { Opt } from './types';
import './index.css';
import { debounce } from '../../utils/debounce';
import { customStyle } from './style';
import DropdownIndicator from './components/dropdown-indicator';
import { CustomOption } from './components/custom-option';

const Search: React.FC = () => {
  const [defaultOptions, setDefaultOptions] = useState<Opt[]>([]);

  const promiseOptions = useCallback(async (inputValue: string) => {
    const debouncedInputValue = await debounce(inputValue, 1000);
    if (debouncedInputValue) {
      const response = await getData({ input: debouncedInputValue });
      if (response) {
        const data = response.data?.characters.results;
        if (data) {
          const transformedCharacters = data.map((character) => {
            const regex = new RegExp(debouncedInputValue, 'gi');
            const nameWithHighlight = character.name.replace(
              regex,
              (match) => `[${match}]`
            );
            return {
              value: character.name,
              label: character.name,
              name: nameWithHighlight,
              image: character.image,
              episodeLength: character.episode.length,
            };
          });
          setDefaultOptions(transformedCharacters);

          return transformedCharacters;
        }
      }
      return [];
    }

    return Promise.resolve([]);
  }, []);

  return (
    <div className="w-[500px] m-32">
      <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions={defaultOptions}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        loadOptions={promiseOptions}
        components={{
          Option: CustomOption,
          DropdownIndicator,
        }}
        styles={customStyle}
        theme={(theme) => ({
          ...theme,
          borderWidth: 2,
          borderRadius: 15,
          color: '#475569',
          borderColor: '#475569',
          colors: {
            ...theme.colors,
            primary25: '#475569',
            primary: 'neutral50',
          },
        })}
      />
    </div>
  );
};

export default Search;
