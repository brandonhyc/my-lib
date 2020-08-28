import { MyPromise } from './MyPromise'; 

new MyPromise(
    (resolve) => { 
        console.log(`resolvable was called`);
        setTimeout(() => resolve('after 2 sec'), 2000)
    }
).then((res) => {
    console.log(`the then resolver was called after: ${res}`);
});
