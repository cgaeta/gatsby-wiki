import React from 'react';

const TextInput = ({ onChange, value }: {
  value: string,
  onChange: (string) => void,
}) => {
  const _onChange = (event) => { onChange(event.target.value); };

  return (
    <input type="text" value={value} onChange={_onChange} />
  )
};

export default TextInput;
