const express = require('express');
const { auth } = require('../middlewares/authMiddleware');

// IMPORT DES CONTROLLERS
const mainController = require('../controllers/mainController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const townController = require('../controllers/townController');
const structureController = require('../controllers/structureController');
const timeRangeController = require('../controllers/timeRangeController');
const permanenceController = require('../controllers/permanenceController');
const welfareController = require('../controllers/welfareController');

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

// On récupère les users > findAll
router.get('/users', userController.getUsers);
// On récupère le user dans l'URL: SIGN IN
router.get('/user/:email', userController.getUserMail);
// On récupère le user dans l'URL: SIGN IN
router.post('/user/login', authController.checkLogin);
// On crée un user dans la BDD > SIGN UP
router.post('/create-user', userController.createUser);
// // on DELETE un user dans la BDD
router.delete('/user/:id', userController.deleteUser);
// // update
// router.patch('/user/:id', userController.updateProfil);

// fetching all towns where welfare takes place
router.get('/towns', townController.getTowns);
// fetching one town where welfare takes place
router.post('/town/:name', townController.getOneTown);

// fetching all structures where welfare takes place
router.get('/structures', structureController.getStructures);
// fetching one structure where welfare takes place
router.post('/structure/:name', structureController.getOneStructure);

// fetching all time ranges when permanences open
router.get('/time-ranges', timeRangeController.getTimeRanges);
// fetching one time ranges when permanences open
router.post('/time-range/:id', timeRangeController.getOneTimeRange);

// fetching all permanences where welfare takes place
router.get('/permanences', permanenceController.getPermanences);
// fetching one structure where welfare takes place
router.post('/permanence/:name', permanenceController.getOnePermanence);

// fetching all welfares
router.get('/supports', welfareController.getWelfares);
// fetching one welfare where welfare takes place
router.post('/support/:name', welfareController.getOneWelfare);

// ERROR 404
router.use(mainController.error404);

module.exports = router; 