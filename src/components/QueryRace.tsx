import React from 'react';
import QueryList from './QueryList';
import { Race } from '../types';

const QueryRace = () =>(
  <QueryList
    options={Object.keys(Race).filter((key) => !Number(key))}
  />
);

export default QueryRace;
