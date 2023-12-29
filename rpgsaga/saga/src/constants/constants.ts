export const NAMES: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
export const MAX_HEALTH: number = 100;

export enum DamageType {
  Physical = "Physical",
  Magical = "Magical",
  Poison = "Poison",
  Fire = "Fire",
  Ice = "Ice",
  Electric = "Electric",
}

interface DamageInfo {
  damage: number;
}

type DamageMap = {
  [key in DamageType]: DamageInfo;
};

export const damageValues: DamageMap = {
  [DamageType.Physical]: { damage: 10 },
  [DamageType.Magical]: { damage: 20 },
  [DamageType.Poison]: { damage: 5 },
  [DamageType.Fire]: { damage: 25 },
  [DamageType.Ice]: { damage: 15 },
  [DamageType.Electric]: { damage: 30 },
};

