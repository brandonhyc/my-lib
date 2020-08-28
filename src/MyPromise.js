import { Listenable } from './Listenable';

class MyPromise {
    isFullfilled;
    payload;

    constructor(resolvable) {
        this.isFullfilled = new Listenable(false);
        resolvable(this.onresolve);
    }

    onresolve = (payload) => {
        this.payload = payload;
        this.isFullfilled.val = true;
    }

    then = (onfullfill) => {
        if (this.isFullfilled.val) {
            return new MyPromise(
                () => onfullfill(this.payload)
            );
        } else {
            return new MyPromise(
                (resolve) => {
                    this.isFullfilled.addListener(
                        () => {
                            resolve(onfullfill(this.payload));
                        }
                    );
                }
            );
            
        }

    }
}

export { MyPromise };