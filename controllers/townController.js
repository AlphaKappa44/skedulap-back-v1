const Town = require("../models/townModel");

const sequelize = require("../utils/database");

const townController = {
    getTowns: async (req, res) => {
      console.log("townController.getTowns!");
      try {
        const towns = await Town.findAll();
        res.json(towns);
        console.log("Towns were found in database!");
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: `Server townController error, please contact an administrator`,
        });
      }
    },
    getOneTown: async (req, res) => {
        console.log("townController.getOneTown!");
        try {
          const town = await Town.findOne({ where: { name: req.params.name } });
          if (town === null) {
            console.log('Town not found!');
          } else {
            console.log("Town were found in database!");
            console.log(town instanceof Town); // true
            console.log(town.dataValues); // 'My Town'
          }
          res.json(town);
          
        } catch (error) {
          console.error(error.message);
          res.status(500).json({
            error: `Server townController error, please contact an administrator`,
          });
        }
      },
};

module.exports = townController;