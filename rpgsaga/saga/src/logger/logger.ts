import { DamageType, damageValues } from '../constants/constants';

function dealDamage(type: DamageType) {
  const damageInfo = damageValues[type];
  if (damageInfo) {
    console.log(`Нанесено ${damageInfo.damage} урона типа ${type} таким то пресонажем по такомуто персонажу`);
    console.log(`У такого то персонажа осталось столько то то урона`);
  } else {
    console.log(`Неизвестный тип урона: ${type}`);
  }
}
