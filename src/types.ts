type Id = string;

enum Race {
  Human,
  Dwarf,
  Elf,
  Halfling,
  Gnome,
  HalfElf,
  Dragonborn,
  Tiefling,
  Firbolg,
  Goliath,
  Aasimar,
  Triton,
  Gith,
  Tortle,
  YuanTi,
  Goblin,
  BugBear,
  HobGoblin,
};

enum Domain {
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

type Quest = Entity & {
  details: string,
  complete: boolean,
  subquests: Quest[],
}

type Person = Entity & {
  race: Race,
  relationships: Person & { relation: string }[],
  quests: Quest[],
}

type God = Person & {
  alias: string[],
  domains: Domain[],
}

type Place = Entity & {
  description: string,
  residents: Person[],
  quests: Quest[],
}
