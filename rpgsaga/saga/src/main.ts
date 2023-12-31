import { HEROES, NAMES } from './constants/config';
import { BasicHero } from './heroes/basicHero';
import { Warrior } from './heroes/warriorHero';
import { Archer } from './heroes/archerHero';
import { Dragon } from './heroes/dragonHero';
import { Magician } from './heroes/magicianHero';
import { Logger } from './logger/logger';

export class Main {
  generateHero() {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];

    const types = Object.values(HEROES);
    const typeHero = types[Math.floor(Math.random() * types.length)];

    let hero: BasicHero;

    switch (typeHero) {
      case HEROES.Warrior:
        hero = new Warrior(name);
        return hero;
      case HEROES.Archer:
        hero = new Archer(name);
        return hero;
      case HEROES.Dragon:
        hero = new Dragon(name);
        return hero;
      case HEROES.Magician:
        hero = new Magician(name);
        return hero;
    }
  }

  startGame() {
    const hero1 = this.generateHero();
    const hero2 = this.generateHero();

    hero1.resetStats();
    hero2.resetStats();

    this.fighting(hero1, hero2);
  }

  fighting(hero1: BasicHero, hero2: BasicHero) {
    Logger.startMessage();

    while (hero1.currentHealth < 0 || hero2.currentHealth < 0) {
      if (hero1.currentHealth <= 0) {
        Logger.endMessage(hero2, hero1.heroType);
      } else {
        Logger.endMessage(hero1, hero2.heroType);
      }
    }
  }
}
