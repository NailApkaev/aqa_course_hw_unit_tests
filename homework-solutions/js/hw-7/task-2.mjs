/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/
// function isPalindrom(word) {
//   if (typeof(word) === "string") {
//       let lowerWord = word.toLowerCase();
//       let wordArr = lowerWord.split("");
//       let drowArr = wordArr.reverse();
//       let drow = drowArr.join("");
//       if (lowerWord == drow) return true;
//       else return false;
//   }
//   else return false;
// }

function isPalindrom(word) {
  if (typeof(word) !== "string") return false;
  if (word === "") return true;

  let lowerWord = word.toLowerCase();
  return lowerWord === lowerWord.split("").reverse().join("");
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  let emptyArr = []
  if (sentence === "") return emptyArr;
  if (typeof(sentence) !== "string") return emptyArr;

  let sentenceArr = sentence.split(" ");
  let maxResult  = 0;
  for (let el of sentenceArr) {
    if (el.length > maxResult) {
      maxResult = el.length;
    }
  }

  let result = [];
  for (let el of sentenceArr) {
    if (el.length === maxResult) {
      result.push(el);
    }
  }
  return result;
}

export { isPalindrom, findLongestWords };
