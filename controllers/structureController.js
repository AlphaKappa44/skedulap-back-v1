const Structure = require("../models/structureModel");

const sequelize = require("../utils/database");

const structureController = {
    getStructures: async (req, res) => {
      console.log("structureController.getStructures!");
      try {
        const structures = await Structure.findAll();
        res.json(structures);
        console.log("Structures were found in database!");
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: `Server structureController.getStructures error, please contact an administrator`,
        });
      }
    },
    getOneStructure: async (req, res) => {
        console.log("structureController.getOneStructure!");
        try {
          const structure = await Structure.findOne({ where: { type_structure: req.params.name } });
          if (structure === null) {
            console.log('Structure not found!');
          } else {
            console.log("Structure was found in database!");
            console.log(structure instanceof Structure); // true
            console.log(structure.dataValues); // 'My Structure'
          }
          res.json(structure);
          
        } catch (error) {
          console.error(error.message);
          res.status(500).json({
            error: `Server structureController.getOneStructure error, please contact an administrator`,
          });
        }
      },
};

module.exports = structureController;