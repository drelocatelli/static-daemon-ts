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
        let injector = document.querySelector('script-injector');
        if(!injector) {
            injector = this.createInjector();
        }
        const inject = document.createElement('script');
        inject.src = path;
        injector.appendChild(inject);
    }

}

new ScriptInjector('/bootstrap/watch.js');