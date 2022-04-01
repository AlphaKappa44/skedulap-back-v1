const Permanence = require("../models/permanenceModel ");

const sequelize = require("../utils/database");

const permanenceController = {
    getPermanences: async (req, res) => {
      console.log("permanenceController.getPermanences!");
      try {
        const permanences = await Permanence.findAll();
        res.json(permanences);
        console.log("Permanences were found in database!");
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: `Server permanenceController.getPermanences error, please contact an administrator`,
        });
      }
    },
    getOnePermanence: async (req, res) => {
        console.log("permanenceController.getOnePermanence!");
        try {
          const permanence = await Permanence.findOne({ where: { permanence_name: req.params.name } });
          if (permanence === null) {
            console.log('Permanence not found!');
          } else {
            console.log("Permanence was found in database!");
            console.log(permanence instanceof Permanence); // true
            console.log(permanence.dataValues); // 'My Permanence'
          }
          res.json(permanence);
          
        } catch (error) {
          console.error(error.message);
          res.status(500).json({
            error: `Server permanenceController.getOnePermanence error, please contact an administrator`,
          });
        }
      },
};

module.exports = permanenceController;