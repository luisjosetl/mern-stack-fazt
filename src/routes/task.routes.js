const express = require('express');
const router = express.Router();
// Router() Este metodo devuelve un objeto en el cual se pueden ingresar rutas.

const Task = require('../models/task');

router.get('/', async (req, res) => {
	const tasks = await Task.find();
	res.json(tasks);		
});

router.get('/:id', async (req, res) => {
	const task = await Task.findById(req.params.id);
	res.json(task);
})

router.post('/', async (req, res) => {
	const { title, description } = req.body;
	const task = new Task({ title,description });
	await task.save()
	console.log(task);
	res.json({status: 'Task save'});
})


router.put('/:id', async (req,res) => {
	const { title, description } = req.body;
	const newTask = {title, description};
	await Task.findByIdAndUpdate(req.params.id, newTask, {
		useFindAndModify: false
	});
	res.json({status: 'Task update'});
});


router.delete('/:id', async (req, res) => {
	await Task.findByIdAndRemove(req.params.id);
	res.json({status: 'Task delete'});
})

module.exports = router;