const db = require('../data/dbConfig.js');

module.exports = {
    add,
    get
}

function add(resource) {
    return db('resources')
        .insert(resource)
        .then(id => {
            return get(id[0])
        })
}

function get(id) {
    if (id) {
        return db('resources')
         .where({id})
         .first();
    } else {
        return db('resources')
    }
}