import { DamageType, maxDamageValues, maxHealthValue } from '../constants/config';

import { BasicHero } from './basicHero';

const typeMagicianAttacks = ['Poison', 'Ice', 'Electric'];

export class Magician extends BasicHero {
  heroType = 'Magician';

  constructor(name: string) {
    // попробовать записать в this.
    const typeAttack = typeMagicianAttacks[Math.floor(Math.random() * typeMagicianAttacks.length)];

    super(name, typeAttack, 0, maxHealthValue.Magician);
    this.damageCaused = Math.floor(Math.random() * maxDamageValues.Fire);
  }
}
