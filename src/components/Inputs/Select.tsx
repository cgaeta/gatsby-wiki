import React, { SFC } from 'react';
import { setProps } from './helpers';

type Props = {
  children: JSX.Element | JSX.Element[],
  onChange: (string) => void,
  value: string,
};

const Select: SFC<Props> = ({ children, onChange, value }) => {
  const _onChange = (event) => { onChange(event.target.value); };
  const props = setProps(value, onChange);

  return (
    <select {...props}>{children}</select>
  );
}

export default Select;
