const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);


// Middleware

// Funciones que se ejecutan antes de que lleguen a las rutas

app.use(morgan('dev'));
// Ver por consola las peticiones que hacen al servidor

app.use(express.json());
// Cada vez que llega un dato al servidor, esta funcion comprobara si es un json

// Routes
app.use('/api/tasks', require('./routes/task.routes'));


// Static files

// Para decirle a express donde iran los archivos estaticos:
// los html, los css, los js.

app.use(express.static(path.join(__dirname, 'public')));

// Starting server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${(app.get('port'))}`);
});