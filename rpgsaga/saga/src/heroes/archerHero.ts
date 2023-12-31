import { DamageType, maxDamageValues, maxHealthValue } from '../constants/config';

import { BasicHero } from './basicHero';

export class Archer extends BasicHero {
  heroType = 'Archer';

  constructor(name: string) {
    super(name, DamageType.Shot, 0, maxHealthValue.Archer);
    this.damageCaused = Math.floor(Math.random() * maxDamageValues.Shot);
  }
}
