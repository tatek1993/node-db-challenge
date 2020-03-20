const db = require('../data/dbConfig.js');

module.exports = {
    add,
    get
}

function add(task) {
    return db('tasks')
        .insert(task)
        .then(id => {
            return get(id[0])
        })
}

function get(id) {
    if (id) {
        return db('tasks')
         .where({id})
         .first();
    } else {
        return db('tasks')
    }
}