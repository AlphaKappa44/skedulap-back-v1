const bcrypt = require("bcrypt");

const User = require("../models/userModel");

const sequelize = require("../utils/database");
// const { Op } = require("sequelize");

const userController = {
  createUser: async (req, res) => {
    console.log("je suis dans la méthode createUser!");

    // je teste ma connection à ma base de donnée.
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }

    // {
    //   const bcrypt = require("bcrypt");
    //   try {
    //     let text = "s0//P4$$w0rD";
    //     console.log("je suis dans bcrypt salt");
    //     let salt = await bcrypt.genSalt(10);

    //     let hash = await bcrypt.hash(text, salt);
    //     console.log(hash);
    //   } catch (err) {
    //     console.error(error.message, err);
    //   }
    // }

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
        console.log(
          "Voici mon nouveau user récupéré du POST:",
          data.first_name,
          data.last_name
        );

		
		
		// data.password = await bcrypt.hash(req.body.password, salt);
        // Avec un CREATE, non, avec un BUILD ça passe
        // build = crée une entité non sauvegardée
        // a ce stade, on n'a pas encore parlé a SQL !
        // const user = User.build({
        //   // id,
        //   email,
        //   password,
        //   first_name,
        //   last_name,
        // });

        // await user.save();
        // console.log("Hourray! The new user was just saved in postgres!");
        let salt = await bcrypt.genSalt(10);
        // let hash = await bcrypt.hash
        const user = await User.create({
          // id,
          email,
          password: await bcrypt.hash(req.body.password, salt),
          first_name,
          last_name,
        });
        // on renvoie l'entité créée en JSON
        // res.json(user);
        console.log(user);
        if (!user) {
          throw new Error(`User has been created, but no data returned`);
        }
        res.status(201).json(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: `Server error, please contact an administrator`,
      });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
      console.log("Users were found in database!");
    } catch (error) {
      // console.trace(error);
      res.status(500).json({
        error: `Server error, please contact an administrator`,
      });
    }
  },

  getUserMail: async (req, res) => {
    try {
      // const userId = parseInt(req.params.userId);

      const user = await User.findOne({ where: { email: req.params.email } });

      if (!user) {
        res
          .status(404)
          .json(
            `L'utilisateur avec l'identifiant(email) ${req.params.email} est introuvable; il n'existe pas dans la base de donnée.`
          );
        console.log(`Cannot find user with id ${req.params.email}; `);
      } else if (user) {
        res.status(200).json(user);
        console.log(
          "The User with id No. " +
            user.id +
            " was found: " +
            user.first_name +
            ", " +
            user.last_name +
            " > " +
            user.email
        );
      } else {
        res.status(400).json({
          error:
            " Erreur 400: mauvaise requète (L'id de l'utilisateur recherché existe-il)",
        });
        console.log("Erreur 400: Bad request");
        console.log(
          "req.params.id: " + req.params.id + " > correct id? Does it exist?"
        );
        // console.trace(error);
      }
    } catch (error) {
      res.status(500).json({
        error:
          ` Erreur 500 du serveur, contactez l'administrateur du site > ` +
          error.name +
          " > " +
          error.message,
      });
      console.log("Erreur 500: " + error.message);
      console.log(
        "req.params.id: " + req.params.id + " > correct id? Does it exist?"
      );
    }
  },
  deleteUser: async (req, res) => {
    try {
      // const userId = parseInt(req.params.userId);

      const user = await User.findByPk(req.params.id);

      if (!user) {
        res
          .status(404)
          .json(
            `L'utilisateur avec l'identifiant(id) no.${req.params.id} est introuvable; il n'existe pas dans la base de donnée.`
          );
        console.log(`Cannot find user with id no.${req.params.id}; `);

      } else {
        await user.destroy();
        res
          .status(200)
          .json(user.email + " a été effacé de la base de donnée.");
        console.log(user.email + " a été effacé de la base de donnée.");

      }
    } catch (error) {
      res.status(500).json({
        error:
          ` Erreur 500 du serveur, contactez l'administrateur du site > ` +
          error.name +
          " > " +
          error.message,
      });
      console.log("Erreur 500: " + error.message);
      console.log(
        "req.params.id: " + req.params.id + " > correct id? Does it exist?"
      );
    }
  },
};

module.exports = userController;
