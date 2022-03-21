const User = require("../models/userModel");
const sequelize = require("../utils/database");
const bcrypt = require("bcrypt");

// 1-find username of the request in database, if it exists
// 2-compare password with password in database using bcrypt, if it is correct
// 3-generate a token using jsonwebtoken
// 4-return user information & access Token
const authController = {
    checkLogin: async (req, res) => {
      console.log("je suis dans la méthode checkLogin!");
  
      // Test connection with sequelize
      try {
        await sequelize.authenticate();
        console.log("Connection authController/checkLogin");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
      // Return user information
      try {
        const {
          email,
          password
        } = req.body;
  
        // Create array of errors
        let bodyErrors = [];

        // Check if inputs are correctly given by the user
        // Add errors to the error's Array
        if (!email) {
          bodyErrors.push("Email cannot be empty");
          console.log("je suis dans !email");
        }
        if (!password) {
          bodyErrors.push("Password cannot be empty");
          console.log("je suis dans !password");
        }
        if (password.length<8) {
          bodyErrors.push("Password must have more than 8 characters");
          console.log("Password must have more than 8 char");
        }
        // if (password ) {
        //   console.log(data.password)
        //   bodyErrors.push("Password is uncorrect");
        //   console.log("Password is NOT correct");
        // }
  
        if (bodyErrors.length > 0) {
          // si j'ai des erreurs
          res.status(400).json(bodyErrors);
          console.log("Je passe dans Body errors!");
        } else {
          console.log("Je suis dans le findOne!");
          console.log("Je reçois bien mon user depuis mon POST (input):");
          console.log(req.body);
          // On récupère notre User depuis la méthode POST
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
          
        // 1-find username of the request in database, if it exists
          const user = await User.findOne({
            where: {
             email: data.email,
             // do not put > password: data.password,
             // because the input is not hashed yet by Bcrypt but the stored password is hashed.
            },
           });
        
        console.log("The user is now checked out in postgres!");
        //console.log(user.email, user.password);

        
        
        
        
          if (!user) {
            console.log("Error: user mail or password incorrect!");
            return res.status(404).send({ message: "User Not found. Mail incorrect. " });
          }
          console.log(user);
          console.log(user.email);
          if (user.email === data.email) {
            console.log("The mail has been checked, it is existingt");
      //  2-compare password with password in database using bcrypt, if it is correct

          }
          console.log(user.password);
          console.log(data.password);
          if (user.password 
            // === data.password
            ) {
            console.log("The password will now be checked");;
            //throw new Error(`User has been created, but the password is not correct`);
            let passwordIsValid = bcrypt.compareSync(
              req.body.password,
              user.password);
            console.log("Password is valid: " + passwordIsValid);
            if (!passwordIsValid) {
              return res.status(401).send({ message: "Password not valid. accessToken:null (JWT) " })
            }
          }
          
          res.status(200).json(user);
        }
      } catch (error) {
        // console.trace(error);
        console.log(error);
        res
          .status(500)
          .json({
            error: `Server error, please contact an administrator`
          });
      }
    }
};

module.exports = authController;