const express = require('express');
const GamesController = require('../controllers/gamesController');

const router = express.Router();
const gamesController = new GamesController();

function setGameRoutes(app) {
    router.get('/', gamesController.getAllGames.bind(gamesController));
    router.get('/add', gamesController.createGame.bind(gamesController));
    router.post('/add', gamesController.createGame.bind(gamesController));
    router.get('/edit/:id', gamesController.getGameById.bind(gamesController));
    router.post('/edit/:id', gamesController.updateGame.bind(gamesController));
    router.post('/delete/:id', gamesController.deleteGame.bind(gamesController));

    app.use('/games', router);
}

module.exports = setGameRoutes;