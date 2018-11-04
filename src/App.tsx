import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from './components/Inputs/Select';

import { Race } from './types';

const App = ({ children }) => {
  const [race, setRace]: [string, (string) => void] = useState(Race.Human);

  const onSelect = (value: string): void => { setRace(value); }

  return (
    <div>
      <Link to="/">Index</Link>
      <Link to="/querylist">Query List</Link>
      {/*<Select value={race} onChange={onSelect}>
        {Object.keys(Race)
          .filter((key) => !Number(key))
          .map((key) => (
            <option value={key} key={key}>{key}</option>
          ))
      </Select>*/}
      {children}
    </div>
  );
}

export default App;
