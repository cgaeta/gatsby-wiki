import React, { useState } from "react";
import Person from "./Person";
import { TextInput } from "./Inputs/index";
import { setProps } from "./Inputs/helpers";

type Props = {};

const People: () => JSX.Element = props => {
  const [people, setPeople] = useState([]);

  const personProps = idx => ({
    name: "",
    setName: name =>
      setPeople(people =>
        people.map((person, i) => (i === idx ? { ...person, name } : person))
      ),
    race: "",
    setRace: race =>
      setPeople(people =>
        people.map((person, i) => (i === idx ? { ...person, race } : person))
      )
  });

  const clickHandler: () => void = () => {
    setPeople(currentPeople => [
      ...currentPeople,
      personProps(currentPeople.length)
    ]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Race</th>
          </tr>
        </thead>
        <tbody>{people.map(person => <Person />)}</tbody>
      </table>
      <button onClick={clickHandler}>New Person</button>
    </div>
  );
};

export default People;
