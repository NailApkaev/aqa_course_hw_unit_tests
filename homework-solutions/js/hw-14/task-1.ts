//1

function wrapInArray<T> (arg: T): T[] {
    // const arr = [];
    // arr.push(arg);
    // console.log(arr);
    // return arr;
    return [arg]
}
const numberArray = wrapInArray(5);
const stringArray = wrapInArray('Hello');

//2

function getLastElement<T> (arr: T[]): T {
    return arr[arr.length-1];
}
console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement(['a', 'b', 'c']));

//3

interface IPair<T, U> {
    first: T;
    second: U;
}

function describePair<T, U> (obj: IPair<T, U>): string {
    return `${obj.first} and ${obj.second}`;
}

console.log(describePair({first:'Alice', second: 30}));