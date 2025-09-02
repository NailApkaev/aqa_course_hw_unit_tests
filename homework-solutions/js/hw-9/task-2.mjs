/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
//Ваш код
    if (
      typeof character !== "object" || 
      character === null ||
      typeof character.name !== "string" ||
      typeof character.age !== "number"
  ) {
    throw new TypeError("Invalid input: object with name (string) and age (number) required");
  }

  characters.push(character);
}

function getCharacter(name) {
  // Ваш код
  // for (let obj of characters){
  //   for (let key in obj) {
  //     if (obj[key] === name) return obj;
  //   }
  // }
  return characters.find ((obj) => Object.values(obj).includes(name))
}

function getCharactersByAge(minAge) {
  // Ваш код
  if (typeof minAge !== "number"){
    throw new TypeError("Invalid input: Input only age!"); 
  }
  return characters.filter((obj) => Object.values(obj).some((val) => typeof val === "number" && val >= minAge));
}

function updateCharacter(name, newCharacter) {
  // Ваш код
  let character = getCharacter(name);
  if (!character) {
    throw new TypeError("Invalid input: Персонаж с таким именем отсутствует!");
  };
  Object.assign(character,newCharacter);
  return character;
}

function removeCharacter(name) {
  const index = characters.findIndex((el) => Object.values(el).includes(name));
  console.log(index);
  if (index === -1) {
    throw new TypeError("Invalid input: Персонаж с таким именем отсутствует!");
  };

  const result = characters.splice(index,1);
  return result;
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
