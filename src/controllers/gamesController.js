const db = require('../models/db');
class GamesController {
    constructor(gameModel) {
        this.gameModel = gameModel;
    }

    async getAllGames(req, res) {
        try {
            const games = await this.gameModel.find();
            res.render('games', { games });
        } catch (error) {
            res.status(500).send('Error retrieving games');
        }
    }

    async getGameById(req, res) {
        try {
            const game = await this.gameModel.findById(req.params.id);
            if (!game) {
                return res.status(404).send('Game not found');
            }
            res.render('editGame', { game });
        } catch (error) {
            res.status(500).send('Error retrieving game');
        }
    }

    async createGame(req, res) {
        try {
            const { title, category } = req.body;
            const image = req.file ? req.file.path : null;
            const newGame = new this.gameModel({ title, category, image });
            await newGame.save();
            res.redirect('/games');
        } catch (error) {
            res.status(500).send('Error creating game');
        }
    }

    async updateGame(req, res) {
        try {
            const { title, category } = req.body;
            const image = req.file ? req.file.path : null;
            await this.gameModel.findByIdAndUpdate(req.params.id, { title, category, image });
            res.redirect('/games');
        } catch (error) {
            res.status(500).send('Error updating game');
        }
    }

    async deleteGame(req, res) {
        try {
            await this.gameModel.findByIdAndDelete(req.params.id);
            res.redirect('/games');
        } catch (error) {
            res.status(500).send('Error deleting game');
        }
    }
}

module.exports = GamesController;