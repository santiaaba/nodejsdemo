/* Modulo para la conexion a la base de datos */
const mysql = require('mysql')

/*
const db_host = "localhost"
const db_user = "root"
const db_pass = "sAn474226"
const db_db = "nodejsdemo"
const db_port = "3307"
*/

class Database {
	constructor(config){
		console.log("Conectando SQL:")
		console.log("host: " + process.env.DB_HOST)
		console.log("port: " + process.env.DB_PORT)
		console.log("user: " + process.env.DB_USER)
		console.log("pass: " + process.env.DB_PASS)
		console.log("dbname: " + process.env.DB_DATABASE)
		this.connection = mysql.createPool({
			connectionLimit: 10,
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_DATABASE
		})
	}
	query(sql){
		return new Promise((resolve,reject) => {
			this.connection.query(sql,(err,rows) => {
				if(err)
					return reject(err)
				resolve(rows)
			})
		})
	}
	close(){
		return new Promise((resolve,reject) => {
			this.connection.end(err => {
				if(err)
					return reject(err)
				resolve()
			})
		})
	}
}

module.exports = Database
