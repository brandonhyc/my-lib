class Listenable {
    constructor(val, ...handlers) {
        this._val = val;
        this._onValUpdateHandlers = handlers;
    }

    _onValUpdate = (newVal) => {
        for (let handler of this._onValUpdateHandlers) {
            handler(newVal);
        }
    }

    addListener = (handler) => {
        this._onValUpdateHandlers.push(handler);
    }

    get val() { 
        return this._val; 
    }
    set val(newVal) {
        this._val = newVal;
        this._onValUpdate(newVal);
    }
}

export { Listenable };