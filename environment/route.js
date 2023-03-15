const fs = require('fs');
const path = require('path');
class Route {
    app;
    
    constructor(app) {
        this.app = app;
    }
    
    define(filePath, res) {
        // const html = fs.readFileSync(filePath, {root: 'public'});
        res.sendFile(filePath, {root: 'public'});
    }

    get(path, filePath, data) {
        this.app.get(path.concat('/api'), (req, res) => {
            res.json(data);
        });
        this.app.get(path, (req, res) => {
            this.define(filePath, res);
        });
    }
}

module.exports = Route;