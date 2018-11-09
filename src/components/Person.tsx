import React, { useState } from "react";
import QueryRace from "./QueryRace";
import { TextInput } from "./Inputs/index";

import { Race } from "../types";

type Props = {
  name: string;
  setName: (string) => void;
  race: Race;
  setRace: (string) => void;
};

const Person = ({ name, setName, race, setRace }: Props) => {
  // const [name, setName] = useState("");
  // const [race, setRace] = useState("");

  return (
    <tr>
      <td>
        <TextInput value={name} onChange={setName} />
      </td>
      <td>
        <QueryRace value={race} onChange={setRace} />
      </td>
    </tr>
  );
};

export default Person;
