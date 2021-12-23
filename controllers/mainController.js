module.exports = {
    error404: (_, res) => {
        res.status(404).json({ error: `Yuh galang, man! Nuttin gwaan there! Dis a waah 404 erra!!!` });
    },
    helloWorld: (req, res) => {
        res.status(200).json({ message: `Hello World! You\'re getting the Skedulap GET request from the homepage!` });
    },
} 