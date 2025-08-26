/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  // Ваш код
 let newArr = []
 for (const element of arrays) {
  newArr = [...newArr, ...element];
 }
 return newArr;
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
//console.log(devideBy('I am super engineer'));
function devideBy(sentence) {
  sentence = sentence.trim();
  if (sentence === "") {
    return "";
  }

  const sWords = sentence.split(" "); 
  const array = [];

  // убираем лишние пробелы
  for (let i = 0; i < sWords.length; i++) {
    if (sWords[i] !== "") {
      array.push(sWords[i]);
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      if (array.length === 1) {
        array[i] = array[i].toLowerCase(); 
      } else {
        array[i] = array[i][0].toLowerCase() + array[i].slice(1).toLowerCase();
      }
    } else {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
    }
  }

  return array.join("_"); 
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0; 
  let b = 1; 
  let c;

  for (let i = 2; i <= n; i++) {
    c = a + b; 
    a = b;     
    b = c;
  }

  return b;
}

export { mergeArrays, fibonacci, devideBy };
