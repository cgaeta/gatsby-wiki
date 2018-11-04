type Id = string;

export enum Race {
  Human = 1,
  Dwarf,
  Elf,
  Halfling,
  Gnome,
  Half_Elf,
  Dragonborn,
  Tiefling,
  Firbolg,
  Goliath,
  Aasimar,
  Triton,
  Gith,
  Tortle,
  Yuan_Ti,
  Goblin,
  Bugbear,
  Hobgoblin,
};

export enum Domain {
  Knowledge,
  War,
  Tempest,
  Light,
  Arcane,
  Death,
}

interface Entity {
  id: Id,
  name: string,
}

export type Quest = Entity & {
  details: string,
  complete: boolean,
  subquests: Quest[],
}

export type Person = Entity & {
  race: Race,
  relationships: Person & { relation: string }[],
  quests: Quest[],
}

export type God = Person & {
  alias: string[],
  domains: Domain[],
}

export type Place = Entity & {
  description: string,
  residents: Person[],
  quests: Quest[],
}
