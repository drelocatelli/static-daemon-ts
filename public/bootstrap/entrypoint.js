console.log(window.location)
const server$ = new rxjs.Observable(observer => {
    fetch(window.location.href.concat('/api'))
      .then(response => response.json())
      .then(data => {
        observer.next(data); // envia os dados para o observer
        observer.complete();
      });
});

class Entrypoint {

    constructor() {
        this.inject('bootstrap/socket.io.min.js');
        this.inject('bootstrap/injector.js');
    }

    injectHead(path) {
        const inject = document.createElement('script');
        inject.src = path;
        document.head.appendChild(inject);
    }

    createInjector() {
        const scriptInject = document.createElement('script-injector');
        document.body.appendChild(scriptInject);
        return scriptInject;
    }

    inject(path) {
        let injector = document.querySelector('script-injector');
        if(!injector) {
            injector = this.createInjector();
        }
        const inject = document.createElement('script');
        inject.src = path;
        injector.appendChild(inject);
        
    }

}

const entrypoint = new Entrypoint();