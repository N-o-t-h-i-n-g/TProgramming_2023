// Names
export const NAMES: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];

export enum HEROES {
  Warrior = 'Warrior',
  Archer = 'Archer',
  Dragon = 'Dragon',
  Magician = 'Magician',
}

// Damage
export enum DamageType {
  Physical = 'Physical',
  Shot = 'Shot',
  Poison = 'Poison',
  Fire = 'Fire',
  Ice = 'Ice',
  Electric = 'Electric',
}

type DamageMap = {
  [key in DamageType]: number;
};

export const maxDamageValues: DamageMap = {
  [DamageType.Physical]: 30,
  [DamageType.Shot]: 32,
  [DamageType.Fire]: 40,

  // for magician
  [DamageType.Poison]: 15,
  [DamageType.Ice]: 35,
  [DamageType.Electric]: 60,
};

// Health
type HeroesMap = {
  [key in HEROES]: number;
};

export const maxHealthValue: HeroesMap = {
  [HEROES.Warrior]: 150,
  [HEROES.Archer]: 125,
  [HEROES.Dragon]: 175,
  [HEROES.Magician]: 100,
};
