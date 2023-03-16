const {fromEvent, Observable, BehaviorSubject} = rxjs;
const countEl = document.querySelector('#block-0 value');
const block1 = document.querySelector('#block-1');

class Reactive {
    observable$ = undefined;
    
    constructor(value) {
        this.observable$ = new BehaviorSubject(value);
    }

    getState(callback) {
        this.observable$.subscribe(value => callback(value));
    }

    setState(callback) {
        this.observable$.next(callback(this.observable$._value));
    }
}

const state = new Reactive(0);

fromEvent(document.querySelector('#block-0 button[name="increment"]'), 'click').subscribe(() => {
    state.setState((v) => v += 1);
});

fromEvent(document.querySelector('#block-0 button[name="decrement"]'), 'click').subscribe(() => {
    state.setState((v) => v -= 1);
});

state.getState((value) => {
    countEl.innerHTML = value;
});