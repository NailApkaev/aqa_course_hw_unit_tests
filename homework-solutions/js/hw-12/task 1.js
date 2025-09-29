//1

function delayTwoSeconds (delay) {
    setTimeout(delay, 2000);
};

delayTwoSeconds(() => console.log("Working?"));

//2

const myFirstPromise = new Promise ((resolve) => {
    resolve (1);
})

myFirstPromise.then((message) => {
    console.log(message);
});

//3

const mySecondPromise = new Promise ((resolve, reject) => {
    reject ("Promise failed");
});

mySecondPromise.catch((message) => {
    console.log(message);
});

//4

function promiseNumber(num) {
    return new Promise ((resolve) => {
        resolve (num);
    });
};

//5

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    results.forEach((el) => console.log(el));
});

//6

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    results.forEach((el) => console.log(el));
});

//7

async function all() {
    try{
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach((el) => console.log(el));
    } catch (error) {
        console.log('Error', error);
    }
};

all();

async function allS() {
    try{
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach((el) => console.log(el));
    } catch (error) {
        console.log('Error', error);
    }
};

allS();