let injector = document.querySelector('script-injector');

const beforeScripts = document.createElement('script');
beforeScripts.defer = false;
beforeScripts.innerHTML = 'var global = "a"';
document.head.appendChild(beforeScripts);

function preventScriptsBeforeInjector() {
    const javascripts = document.body.querySelectorAll('javascript');
    for (let script of javascripts) {
        if (script.parentElement.localName != 'script-injector') {
            let newScript = document.createElement('script');
            newScript.innerHTML = script.innerHTML;
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
new ScriptInjector('/bootstrap/onReady.js');


preventScriptsBeforeInjector();