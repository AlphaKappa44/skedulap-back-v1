const Welfare = require("../models/welfareModel");

const sequelize = require("../utils/database");

const welfareController = {
    getWelfares: async (req, res) => {
      console.log("welfareController.getWelfares!");
      try {
        const welfares = await Welfare.findAll();
        res.json(welfares);
        console.log("Welfares were found in database!");
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: `Server welfareController error, please contact an administrator`,
        });
      }
    },
    getOneWelfare: async (req, res) => {
        console.log("welfareController.getOneWelfare!");
        try {
          const welfare = await Welfare.findOne({ where: { type_support: req.params.name } });
          if (welfare === null) {
            console.log('Welfare not found!');
          } else {
            console.log("Welfare was found in database!");
            console.log(welfare instanceof Welfare); // true
            console.log(welfare.dataValues); // 'My Welfare'
          }
          res.json(welfare);
          
        } catch (error) {
          console.error(error.message);
          res.status(500).json({
            error: `Server welfareController error, please contact an administrator`,
          });
        }
      },
};

module.exports = welfareController;