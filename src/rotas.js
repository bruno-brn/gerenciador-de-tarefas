const express = require('express');
const bodyParser = require('body-parser');
const tasksController = require('./controladores/tasksControl');
const validateTaskId = require('./intermediarios/validateTaskId');
const importCSVRoute = require('./importCSV');
const data = require('./database.json');


const rotas = express();

rotas.use(bodyParser.json());

rotas.post('/tasksControl', tasksController.criarTask);

rotas.get('/tasksControl', tasksController.listarTasks);

rotas.put('/tasksControl/:id',validateTaskId(data) ,tasksController.updateTask);

rotas.delete('/tasksControl/:id', validateTaskId(data), tasksController.deleteTask);

rotas.patch('/tasksControl/:id/complete', validateTaskId(data), tasksController.completeTask);

rotas.post('/import-csv', importCSVRoute);



module.exports = rotas;
