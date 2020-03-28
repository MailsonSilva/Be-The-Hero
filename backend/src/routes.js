const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Login
routes.post('/sessions', SessionController.create);//login da ong

//Ongs
routes.get('/ongs', OngController.index)//lista todas as ongs..
routes.post('/ongs', OngController.create);//cadastro de ongs..

routes.get('/profile', ProfileController.index);//lista uma específica ong pelo id

//Incidentes
routes.get('/incidents', IncidentController.index);  //listando de incidentes
routes.post('/incidents', IncidentController.create);//cadastro de incidentes
routes.delete('/incidents/:id', IncidentController.delete);//cadastro de incidentes


module.exports = routes;
