var connection = require('./connection')

module.exports = {
    createTable: function(cb) {
        
    }
}

module.exports = {
    createTable: function(cb) {
        var q = 'CREATE TABLE IF NOT EXISTS heros (name VARCHAR(255) NOT NULL, weakness TINYTEXT, PRIMARY KEY (name))'
        connection.query(q, cb);
    }
}


module.exports = {
    createTable: function(cb) {
        var q = 'CREATE TABLE IF NOT EXISTS heros (name VARCHAR(255) NOT NULL, weakness TINYTEXT, PRIMARY KEY (name))'
        connection.query(q, cb);
    },
    
    save: function(hero, cb) {
        var q = 'INSERT INTO heros SET ? ON DUPLICATE KEY UPDATE weakness=VALUES(weakness)'
        connection.query(q, hero, cb)
    },
    
    getByName: function(name, cb) {
        var q = 'SELECT * FROM heros WHERE name = ?'
        connection.query(q, [name], cb)
    }

    
}


