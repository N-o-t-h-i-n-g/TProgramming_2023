import { Logger } from '../logger/logger';

export abstract class BasicHero {
  name: string;
  typeAttack: string;
  damageCaused: number;
  startHealth: number;
  currentHealth: number;

  constructor(name: string, typeAttack: string, damageCaused: number, startHealth: number) {
    this.name = name;
    this.typeAttack = typeAttack;
    this.damageCaused = damageCaused;
    this.startHealth = startHealth;
    this.currentHealth = startHealth;
  }

  takeDamage(damage: number): void {
    this.currentHealth -= damage;
  }

  performAttack(target: BasicHero): void {
    target.takeDamage(this.damageCaused);
    Logger.dealDamageLog(this.damageCaused, this.typeAttack, this.heroType, target);
  }

  resetStats(): void {
    this.currentHealth = this.startHealth;
  }

  abstract heroType: string;
}
