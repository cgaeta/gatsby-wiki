import React, { SFC } from 'react';

type Props = {
  children: JSX.Element | JSX.Element[],
  onChange: (string) => void,
  value: string,
};

const Select: SFC<Props> = ({ children, onChange, value }) => {
  const _onChange = (event) => { onChange(event.target.value); };

  return (
    <select value={value} onChange={_onChange}>{children}</select>
  );
}

export default Select;
