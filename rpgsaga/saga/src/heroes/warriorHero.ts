import { DamageType, maxDamageValues, maxHealthValue } from '../constants/config';

import { BasicHero } from './basicHero';

export class Warrior extends BasicHero {
  heroType = 'Warrior';

  constructor(name: string) {
    super(name, DamageType.Physical, 0, maxHealthValue.Warrior);
    this.damageCaused = Math.floor(Math.random() * maxDamageValues.Physical);
  }
}
