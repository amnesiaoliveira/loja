const db = require('./db');

const Game = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM games');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM games WHERE id = ?', [id]);
        return rows[0];
    },

    create: async (game) => {
        const { nome, categoria, imagem, descricao } = game;
        const [result] = await db.query(
            'INSERT INTO games (nome, categoria, imagem, descricao) VALUES (?, ?, ?, ?)',
            [nome, categoria, imagem, descricao]
        );
        return result.insertId;
    },

    update: async (id, game) => {
        const { nome, categoria, imagem, descricao } = game;
        await db.query(
            'UPDATE games SET nome = ?, categoria = ?, imagem = ?, descricao = ? WHERE id = ?',
            [nome, categoria, imagem, descricao, id]
        );
    },

    delete: async (id) => {
        await db.query('DELETE FROM games WHERE id = ?', [id]);
    }
};

module.exports = Game;