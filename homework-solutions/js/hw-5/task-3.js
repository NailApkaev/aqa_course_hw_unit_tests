/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

let wordWithoutSymbol = word.replace (/[^a-zA-Z]/g, '');
wordWithoutSymbol = wordWithoutSymbol.toLowerCase();
let str = wordWithoutSymbol.length;

let countA = 0;
let countB = 0;

for (let i = 0; i <= str-1; i++){
    if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u'){
        countA++;
    } else {
        countB++;
    }
}
vowelsAndConsonantsResult = `${word} contains ${countA} vowels and ${countB} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
