const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//  Respond to GET requests:
app.get('/api-test', function (req, res) {
    res.send('Hello World! You\'re getting the Skedulap GET request for the homepage!')
  })

app.get('/user', (req, res) => {
    const data = { 
        email: 'email@lcdmn.org',
        password: 'completementCryped',
        first_name: 'Jean',
        last_name: 'Dupont'
    };
    res.json(data);
})
// Respond to POST request on the root route (/), the application’s home page:
  
app.post('/', function (req, res) {
res.send('Got a POST request')
})

//  Respond to a PUT request to the /user route:
  
app.put('/user', function (req, res) {
res.send('Got a PUT request at /user')
})

//  Respond to a DELETE request to the /user route:
  
app.delete('/user', function (req, res) {
res.send('Got a DELETE request at /user')
})

// 
app.listen(PORT, () => {
  console.log(`Skedulap server listening @ http://localhost:${PORT}`);
});