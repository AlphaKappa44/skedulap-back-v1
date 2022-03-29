const Town = require("../models/townModel");

const sequelize = require("../utils/database");

const townController = {
    getTowns: async (req, res) => {
      console.log("userController.createUser!");
      try {
        const towns = await Town.findAll();
        res.json(towns);
        console.log("Towns were found in database!");
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: `Server error, please contact an administrator`,
        });
      }
    }
};

module.exports = townController;