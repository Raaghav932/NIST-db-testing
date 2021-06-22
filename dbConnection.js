const sqlite3 = require('sqlite3').verbose()

function connection(){

	let db = new sqlite3.Database(':memory:', (err) => {
		if (err){
			return console.error(err.message)
		}
		console.log("connected to the database")
		})
	      
	 db.close((err) => {
	 	if (err) {
	 		return console.error(err.message)
		}
		console.log('closed the connection')

	})


};

