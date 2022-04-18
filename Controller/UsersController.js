'use strict'

const response = require('./../response')
const db = require('./../settings/db')

exports.users = (req, res) => {

    db.query('SELECT * FROM `users`', (error, row, fields) => {
        if(error) {
            console.log(error);
        } else {
            response.status(row, res)
        }
    })

}