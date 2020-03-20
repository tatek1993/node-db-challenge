const db = require('../data/dbConfig.js');

module.exports = {
    add,
    get,
    getTasks
  
}

function add(project) {
    return db('projects')
        .insert(project)
        .then(id => {
            return get(id[0])
        })
}

function get(id) {
    if (id) {
        return db('projects')
         .where({id})
         .first();
    } else {
        return db('projects')
    }
}

function getTasks(id) {
    return db('tasks')
        .where('tasks.project_id', '=', id)
}