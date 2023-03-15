const fs = require('fs');
class Route {
    app;
    
    constructor(app) {
        this.app = app;
    }
    
    define(filePath) {
        const html = fs.readFileSync( __dirname + filePath );
        res.sendFile(html);
    }

    get(path, filePath, data) {
        this.app.get(path.concat('api'), (req, res) => {
            res.json(data);
        });
        this.app.get(path, (req, res) => {
            this.define(filePath);
        });
    }
}

module.exports = Route;