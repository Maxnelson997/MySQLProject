var assert = require('assert')
var herosRepo = require('./heros-repo')
var connection = require('./connection')

connection.connect()

// tests go here, in between connect() and end()
assert.equal(typeof(herosRepo.createTable), 'function')


herosRepo.createTable(function(err, rows) {
    if (err) 
        assert.fail(err)
})

assert.equal(typeof(herosRepo.save), 'function')
assert.equal(typeof(herosRepo.getByName), 'function')



setTimeout(function() {
    connection.end()
}, 250)


var superman = {
    name: 'Superman',
    weakness: 'Kryptonite'
}

herosRepo.save(superman, function(err, rows) {
    if (err)
        assert.fail(err)

    herosRepo.getByName('Superman', function(err, rows) {
        if (err)
            assert.fail(err)
        
        assert.deepEqual(rows[0], superman)
    })
})
