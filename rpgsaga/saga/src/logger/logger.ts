import { BasicHero } from '../heroes/basicHero';

export class Logger {
  static startMessage() {
    console.log('Битва началась');
  }

  static endMessage(target: BasicHero, typeHero: string) {
    console.log(`Битва завершена. ${typeHero} одержал победу над ${target} . У него осталось .. здоровья`);
  }

  static dealDamageLog(damageInfo: number, typeAttack: string, typeHero: string, target: BasicHero) {
    if (damageInfo) {
      console.log(`Нанесено ${damageInfo} урона типа ${typeAttack} пресонажем ${typeHero} по противнику ${target}`);
      console.log(`У ${target} осталось ${target.currentHealth} здоровья`);
    } else {
      console.log(`Неизвестный тип урона: ${typeAttack}`);
    }
  }
}
