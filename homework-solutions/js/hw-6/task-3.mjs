/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique;

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
for (let i = 0; i < numArr.length; i++){
  if (numArr.indexOf(numArr[i]) !== numArr.lastIndexOf(numArr[i])){
    numArr.splice(numArr.lastIndexOf(numArr[i]),1);
    i = 0;
  } else {
  continue;
  }
}
console.log (numArr);
unique = numArr;

export { unique };
