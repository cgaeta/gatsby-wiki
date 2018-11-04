import React from 'react';

const Button = ({ value, onChange }) => {
  const _onChange = () => {
    onChange(value);
  }
(

  <button onChange={_onChange}>{value}</button>
)
}
