const mongoose = require('mongoose');
// Permite conectarse a la base de datos y al mismo tiempo 
// definir como van a lucir los datos dentro de la BD


const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect(URI)
	.then(db => console.log('DB is connected'))
	.catch(err => console.log(err));

module.exports = mongoose;