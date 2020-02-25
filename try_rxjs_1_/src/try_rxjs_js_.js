console.log("1");
const greetingPoster = new Promise((resolve, reject) => {
    console.log('2');
    resolve('3');
});

console.log('4');

greetingPoster.then(res => console.log(`5: ${res}`));