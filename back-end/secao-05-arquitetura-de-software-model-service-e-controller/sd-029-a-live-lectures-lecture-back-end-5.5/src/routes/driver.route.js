const route = require('express').Router();
const { driverController } = require('../controllers');

route.get('/open/travels', driverController.openTravels);
route.patch('/:driverId/travel/:travelId', driverController.updateTravel);

module.exports = route;
