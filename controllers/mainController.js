module.exports = {
    error404: (_, response) => {
        response.status(404).json({error: `Yuh galang, man! Nuttin gwaan there! Dis a waah 404 erra!!!`});
    }
} 