import { useState } from 'react';

type Callback<T> = (T) => void;
type SetProps<T> = (initialValue: T, callback: Callback<T>) => {
  value: T,
  onChange: Callback<T>,
};

export const setProps: SetProps<string> = (initialValue, callback) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: ({ target: { value} }) => {
      setValue(value);
      callback(value);
    }
  };
};
