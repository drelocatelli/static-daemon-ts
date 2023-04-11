console.log('global', global)

let server$ = new rxjs.Observable((observer) => {
    fetch(window.location.href.concat('/api'))
        .then((response) => response.json())
        .then((data) => {
            observer.next(data); // envia os dados para o observer
            observer.complete();
        });
});

server$.subscribe(value => { global = value });