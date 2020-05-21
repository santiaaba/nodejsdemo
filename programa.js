module.exports = {

azar_user: function(req,res){
	/* Retorna un nombre al azar */
	var sql = 'select * from usuario';
	promise = db.query(sql)
	.then(ok=> {
		var i = azar(ok.length)
		res.status(500).send(ok[i].name)
	})
	.catch(err=>{
		res.status(500).send(err)
	})
}
}

function azar(a){
    return Math.floor((Math.random() * 1000000) % a)
}
