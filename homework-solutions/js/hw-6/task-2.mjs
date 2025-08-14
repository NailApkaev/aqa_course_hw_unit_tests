import { validateLocaleAndSetLanguage } from "typescript";

/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let resultUnique;
let resultNull;

let strCom1 = competitorPizzas.toString();
strCom1 = strCom1.toLowerCase();
let arrCom1 = strCom1.split(",");

let strMy1 = myPizzasT1.toString();
strMy1 = strMy1.toLowerCase();
let arrMy1 = strMy1.split(",");

let strMy2 = myPizzasT2.toString();
strMy2 = strMy2.toLowerCase();
let arrMy2 = strMy2.split(",");

const uniqueArr = [];

for (const value of arrMy1) {
  if (arrCom1.includes(value)) {
    continue;
  } else {
    let i = arrMy1.indexOf(value);
    uniqueArr.push(myPizzasT1[i]);
  }
}
resultUnique = uniqueArr;
console.log(resultUnique);

let unUniqueArr;

for (const value2 of arrMy2) {
  if (strMy2 === strCom1) {
    unUniqueArr = null;
  }
}
resultNull = unUniqueArr;
console.log(resultNull);


export { resultNull, resultUnique };
