/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels = 'aeiou';
  const sortVowels = wordsArr.sort(
    (a, b) => 
    (a.toLowerCase().split('').filter((el) => vowels.includes(el)).length) 
    - (b.toLowerCase().split('').filter((el) => vowels.includes(el)).length)
  )
    return sortVowels;
}

sortedByVowels (words);

export { sortedByVowels };
