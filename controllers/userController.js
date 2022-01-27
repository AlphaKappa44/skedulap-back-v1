const User  = require("../models/userModel");


const sequelize = require('../utils/database');
// const { Op } = require("sequelize");

const userController = {
  createUser: async (req, res) => {
    console.log("je suis dans la méthode createUser!");

    // je teste ma connection à ma base de donnée.
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
        }

    try {
      const { first_name, last_name, email, password } = req.body;
      

      let bodyErrors = [];
      if (!first_name) {
        bodyErrors.push("First name cannot be empty");
        console.log("je suis dans !first_name");
      }
      if (!last_name) {
        bodyErrors.push("Last name cannot be empty");
        console.log("je suis dans !last_name");
      }
      if (!email) {
        bodyErrors.push("Email cannot be empty");
        console.log("je suis dans !email");
      }
      if (!password) {
        bodyErrors.push("Password cannot be empty");
        console.log("je suis dans !password");
      }

      if (bodyErrors.length > 0) {
        // si j'ai des erreurs
        res.status(400).json(bodyErrors);
        console.log("Je passe dans Body errors!");
      } else {
        console.log("Hey!!! Je suis dans le build newUser!");
        // On récupère notre User depuis la méthode POST
        console.log("Je reçois bien mon user depuis mon POST:");
        console.log(req.body);

        const data = req.body;
        console.log("Voici mon nouveau user récupéré du POST:", data.first_name, data.last_name);


        // Avec un CREATE, non, avec un BUILD ça passe
        // build = crée une entité non sauvegardée
        // a ce stade, on n'a pas encore parlé a SQL !
        const user = User.build({
          // id,
          email,
          password,
          first_name,
          last_name,
        });
        // const user = await User.create({
        //     email,
        //     password,
        //     first_name,
        //     last_name,
        //   });

        await user.save();
        console.log("Hourray! The new user was just saved in postgres!")
        // on renvoie l'entité créée en JSON
        // res.json(user);
        console.log(user);
        if (!user) {
          throw new Error(`User has been created, but no data returned`);
        }
        res.status(201).json(user);
      }

        }   catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
  },

  // getUsers: (req, res) => {
    // const users = [
    //   {
    //     email: "email@lcdmn.org",
    //     password: "completementCryped",
    //     first_name: "Jean",
    //     last_name: "Dupont",
    //   },

    //   {
    //     email: "email2@lcdmn.org",
    //     password: "completementCrypado",
    //     first_name: "René",
    //     last_name: "Lembrouille",
    //   },
    // ];
    getUsers: async (request, response) => {
      try {
          const users = await User.findAll();
  
          response.json(users);
      } catch (error) {
          console.trace(error);
          response.status(500).json({ error: `Server error, please contact an administrator` });
      }

  // },
    res.json(users);
  },

  getUserId: (req, res) => {
    res.status(200).json({
      message: req.params.id,
    });

    console.log(req.params.id);
  },
};

module.exports = userController;
