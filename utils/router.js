const express = require('express');
const path = require('path');

// IMPORT DES CONTROLLERS
const mainController = require('../controllers/mainController');

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

router.get('/user', (req, res) => {
    const data = { 
        email: 'email@lcdmn.org',
        password: 'completementCryped',
        first_name: 'Jean',
        last_name: 'Dupont'
    };
    res.json(data);
})

  
// app.put('/user', function (req, res) {
// res.send('Got a PUT request at /user')
// })

// //  Respond to a DELETE request to the /user route:
  
// app.delete('/user', function (req, res) {
// res.send('Got a DELETE request at /user')
// })


router.use(mainController.error404);

module.exports = router; 