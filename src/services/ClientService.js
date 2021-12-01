const db = require('../db')

module.exports = {
    all: () => {
        return new Promise((accepted, rejected) => {
            db.query('SELECT * FROM clients', (error, results) => {
                if (error) {
                    rejected(error)
                    return
                }
                accepted(results)
            })
        })
    },

    read: (id) => {
        return new Promise((accepted, rejected) => {

            db.query('SELECT * FROM clients WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejected(error)
                    return
                }
                if (results.length > 0) {
                    accepted(results[0])
                } else {
                    accepted(false)
                }
            })

        })
    },

    create: (name, email) => {
        return new Promise((accepted, rejected) => {
            db.query('INSERT INTO clients (name, email) values (?, ?)', [name, email],
                (error, results) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(results.insertId)
                })
        })
    },

    update: (id, name, email) => {
        return new Promise((accepted, rejected) => {
            db.query('UPDATE clients SET name = ?, email = ? WHERE id = ?', [name, email, id],
                (error, results) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(results)
                })
        })
    },

    delete: (id) => {
        return new Promise((accepted, rejected) => {

            db.query('DELETE FROM clients WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejected(error)
                    return
                }
                accepted(results[0])
            })

        })
    },
}