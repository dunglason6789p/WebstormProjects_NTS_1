// import {Observable} from "rxjs";
const {Observable} = require('rxjs');

console.log('1');
const greetingLady$ = new Observable(observer => {
    console.log('2');
    observer.next('3');
    observer.complete();
});

console.log('4');

greetingLady$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('5')
});