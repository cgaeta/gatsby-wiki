import React, { useState } from 'react';
import { TextInput } from './Inputs/index';

type Props = { options: [string] };

const QueryList: (Props) => JSX.Element = ({ options }) => {
  const [query, setQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const normalize = (text: string): string =>
    text.toLowerCase().replace(/_/g, ' ');

  const onQuery: (string) => void = (value) => {
    setQuery(value);
    setFilteredOptions(value === '' ? [] : options.filter((key) =>
      normalize(key).indexOf(value.toLowerCase()) === 0)
      .map((item) => item.replace(/_/g, ' ')));
  };

  const onClick: (string) => () => void = (value) => () => {
    setQuery(value);
    setFilteredOptions([]);
  };

  return (
    <div>
      <TextInput value={query} onChange={onQuery} />
      <ul>
        {filteredOptions.map((item) =>
          <li key={item}>
            <button onClick={onClick(item)}>{item}</button>
          </li>
        )}
      </ul>
    </div>
  )
};

export default QueryList;
