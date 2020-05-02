const connection = require("../utils/dbconn");

module.exports = {
    /**
        @route GET /gastos
        @desc Getting all  expenses
        @access Auth'ed
    */
    async index(req, res) {
        try {
            const [data] = await connection("gasto").select("*");

            return res.status(201).json(data);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async store(req, res) {
        try {
            const { user_id, valor, categoria, nome } = req.body;

            const [data] = await connection("gasto")
                .insert({
                    user_id,
                    valor,
                    categoria,
                    nome,
                })
                .returning("id");

            return res.status(201).json(data);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async delete(req, res) {
        try {
            const { gasto_id } = req.body;

            const data = await connection("gasto")
                .where({ id: gasto_id })
                .del();

            return res.status(201).json({ data, success: true });
        } catch (err) {
            return res.status(400).json(err);
        }
    },
};
