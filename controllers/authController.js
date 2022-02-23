const User = require("../models/userModel");
const sequelize = require("../utils/database");

const authController = {
    checkLogin: async (req, res) => {
      console.log("je suis dans la méthode checkLogin!");
  
      // je teste ma connection à ma base de donnée.
      try {
        await sequelize.authenticate();
        console.log("Connection authController/checkLogin");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
      try {
        const {
          email,
          password
        } = req.body;
  
        let bodyErrors = [];
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
          console.log("Hey!!! Je suis dans le findOne!");
          // On récupère notre User depuis la méthode POST
          console.log("Je reçois bien mon user depuis mon POST:");
          console.log(req.body);
  
          const data = req.body;
          console.log(
            "Voici mon nouveau user récupéré du POST:",
            data.email,
            data.password
          );
        //   const user = User.build({
        //     // id,
        //     email,
        //     password
        //   });
          
          const user = await User.findOne({
            where: {
             email: data.email,
             password: data.password,
            },
           });
        
        console.log("The user is checked out in postgres!");
        console.log(user.email, user.password);

        console.log(user);
        
          if (!(user.email === data.email)) {
            throw new Error(`User has been created, but no data returned`);
          }
          res.status(200).json(user);
        }
      } catch (error) {
        // console.trace(error);
        response
          .status(500)
          .json({
            error: `Server error, please contact an administrator`
          });
      }
    }
};

module.exports = authController;