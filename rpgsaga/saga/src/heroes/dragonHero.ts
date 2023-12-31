import { DamageType, maxDamageValues, maxHealthValue } from '../constants/config';

import { BasicHero } from './basicHero';

export class Dragon extends BasicHero {
  heroType = 'Dragon';

  constructor(name: string) {
    super(name, DamageType.Fire, 0, maxHealthValue.Dragon);
    this.damageCaused = Math.floor(Math.random() * maxDamageValues.Fire);
  }
}
