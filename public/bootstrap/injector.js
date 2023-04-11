let injector = document.querySelector('script-injector');

const beforeScripts = document.createElement('script');
beforeScripts.defer = false;
beforeScripts.innerHTML = 'var global = undefined';
document.head.appendChild(beforeScripts);

var server$ = new rxjs.Observable((observer) => {
    fetch(window.location.href.concat('/api'))
        .then((response) => response.json())
        .then((data) => {
            observer.next(data); // envia os dados para o observer
            observer.complete();
        });
});

server$.subscribe(value => {
    global = value;
});

function preventScriptsBeforeInjector() {
    const javascripts = document.body.querySelectorAll('script');
    for (let script of javascripts) {
        if (script.parentElement.localName != 'script-injector') {
            let newScript = document.createElement('script');
            newScript.innerHTML = script.childNodes[0].nodeValue;
            injector.appendChild(newScript);
            script.remove();
            
        }
    }
}

class ScriptInjector {
    constructor(path) {
        this.inject(path);
    }

    createInjector() {
        const scriptInject = document.createElement('script-injector');
        document.body.appendChild(scriptInject);
        return scriptInject;
    }

    inject(path) {
        if (!injector) {
            injector = this.createInjector();
        }
        const inject = document.createElement('script');
        inject.src = path;
        injector.appendChild(inject);
    }
}

new ScriptInjector('/bootstrap/watch.js');
new ScriptInjector('/bootstrap/componentInjector.js');


preventScriptsBeforeInjector();