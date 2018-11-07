import React, { SFC } from 'react';

type Props = {
  value: string,
  onChange: (string) => void,
};

type InputHandler = (string) => void;

type InputEvent = {
  target: {
    value: string,
  },
};

type OnChange = (InputHandler) => (InputEvent) => void;

const _onChange: OnChange = (fn) =>
  (event) => fn(event.target.value);

const TextInput: SFC<Props> = ({ value, onChange }) => {
  return (
    <input value={value} onChange={_onChange(onChange)} />
  )
};

export default TextInput;
