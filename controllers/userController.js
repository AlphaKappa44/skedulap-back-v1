const { User } = require("../models");
// const { Op } = require("sequelize");

const userController = {
  createUser: async (req, res) => {
    console.log("je suis dans la méthode createUser!");

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

        // let newUser = req.body;
        // console.log(newUser);
        const data = req.body;
        console.log("Voici mon nouveau user récupéré du POST:", data.first_name, data.last_name);
        // res.json(data);
        // const user = await User.build(data);

// Si j'ajoute ma création, je file dans le catch error, mais sans avoir d'erreur de la parrt de sequelize!! ---------------
        const user = await User.create({
          email: data.email,
          password: data.password,
          first_name: data.first_name,
          last_name: data.last_name,
        });

        if (!user) {
          throw new Error(`User has been created, but no data returned`);
        }
        res.status(201).json(user);
      }
    } catch {
      console.log("Je suis passé dans le catch error!");
      // console.error();

      console.log("Mon user n'a pas été créé en BDD");
      // console.log(req.body);
      res.status(500).json("Mon user n'a pas été créé (catched error)");
      // res.json('errors');
    }
  },

  getUsers: (req, res) => {
    const users = [
      {
        email: "email@lcdmn.org",
        password: "completementCryped",
        first_name: "Jean",
        last_name: "Dupont",
      },

      {
        email: "email2@lcdmn.org",
        password: "completementCrypado",
        first_name: "René",
        last_name: "Lembrouille",
      },
    ];
    res.json(users);
  },

  getUserId: (req, res) => {
    res.status(200).json({
      message: req.params.userid,
    });

    console.log(req.params.userid);
  },
};

module.exports = userController;
