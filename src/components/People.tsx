import React, { useState } from "react";
import Person from "./Person";
import { TextInput } from "./Inputs/index";
import { setProps } from "./Inputs/helpers";

type Props = {};

const People: () => JSX.Element = props => {
  const [people, setPeople] = useState([]);

  const personHandlers = idx => ({
    setName: name =>
      setPeople(people =>
        people.map((person, i) => {
          console.log(person, i, i === idx);
          return i === idx ? { ...person, name } : person;
        })
      ),
    setRace: race =>
      setPeople(people =>
        people.map((person, i) => {
          console.log(person, i, i === idx);
          return i === idx ? { ...person, race } : person;
        })
      )
  });

  const clickHandler: () => void = () => {
    setPeople(currentPeople => [...currentPeople, { name: "", race: "" }]);
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
        <tbody>
          {people.map((person, idx) => (
            <Person key={idx} {...personHandlers(idx)} {...person} />
          ))}
        </tbody>
      </table>
      <button onClick={clickHandler}>New Person</button>
    </div>
  );
};

export default People;
