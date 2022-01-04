const express = require('express');
const { auth } = require('../middleware/authMiddleware');

// IMPORT DES CONTROLLERS
const mainController = require('../controllers/mainController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

// LES ROUTES et leur actions
// exemple : 
//router.route('/lists/:id')
//    .get(listController.getOneList)
//    .patch(listController.updateList)
//    .delete(listController.deleteList);

//  Respond to GET request:
router.get('/', mainController.helloWorld);


// AUTHENTIFICATION + CONNEXION

// Données d'authentification du user
// router.post('/signin', authController.authUser);
// //On alimente le key_password
// router.patch('/resetPassword/add/:email', authController.addResetPassword);
// // On supprime le key_password
// router.patch('/resetPassword/delete/:email', authController.deleteResetPassword);

// // == PROFIL ====> penser à remettre la verif TOKEN ===> AUTH
// // create user
// router.post('/signup', userController.createUser);

// user's profil

// On récupère le user
router.get('/users', userController.getUsers);

// On récupère le user dans l'URL
router.get('/user/:userid', userController.getUserId);

// On crée un user dans la BDD
router.post('/create-user', userController.createUser);
// router.post('/create-user', ({req, res}) => userController.createUser(req, res));
// // delete
// router.delete('/profil/:userid', userController.deleteProfil);
// // update
// router.patch('/profil/:userid', userController.updateProfil);

// ERROR 404
router.use(mainController.error404);

module.exports = router; 