import React, { useState } from 'react';
import QueryRace from './QueryRace';
import { TextInput } from './Inputs/index';

const Person = () => {

  const [name, setName] = useState('');
  const [race, setRace] = useState('');

  return (
    <div>
      <TextInput value={name} onChange={setName} />
      <QueryRace value={race} onChange={setRace} />
    </div>
  );
};

export default Person;
