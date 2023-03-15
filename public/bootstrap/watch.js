// to watch file modifications then reload page
class WatchClientServer {
    constructor() {
        this.running(); 
    }
    
    static socket() {
        //@ts-ignore
        return io(`ws://${window.location.host}`, { transports: ['websocket', 'polling', 'flashsocket'] });
    }

    socket() {
        return WatchClientServer.socket();
    }
    
    running() {
        this.socket().on('reload', () => {
            console.log('Reload event...');
            window.location.reload();
        });
    }
    
}

new WatchClientServer();