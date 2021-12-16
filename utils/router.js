const express = require('express');
const path = require('path');

// IMPORT DES CONTROLLERS
const mainController = require('../controllers/mainController');
const authController = require('../controllers/authController');
const userController = require('./controllers/userController');

const router = express.Router();

// LES ROUTES et leur actions
// exemple : 
//router.route('/lists/:id')
//    .get(listController.getOneList)
//    .patch(listController.updateList)
//    .delete(listController.deleteList);

//  Respond to GET requests:

router.get('/', function (req, res) {
    res.send('Hello World! You\'re getting the Skedulap GET request from the homepage!')
  })

// AUTHENTIFICATION + CONNEXION

// Données d'authentification du user
router.post('/signin', authController.authUser);
//On alimente le key_password
router.patch('/resetPassword/add/:email', authController.addResetPassword);
// On supprime le key_password
router.patch('/resetPassword/delete/:email', authController.deleteResetPassword);

// == PROFIL ====> penser à remettre la verif TOKEN ===> AUTH
// create user
router.post('/signup', userController.createUser);
// user's profil
router.get('/profil/:userId', userController.getProfil);
// delete
router.delete('/profil/:userId', userController.deleteProfil);
// update
router.patch('/profil/:userId', userController.updateProfil);

// router.get('/user', (req, res) => {
//     const data = { 
//         email: 'email@lcdmn.org',
//         password: 'completementCryped',
//         first_name: 'Jean',
//         last_name: 'Dupont'
//     };
//     res.json(data);
// })

// ERROR 404
router.use(mainController.error404);

module.exports = router; 