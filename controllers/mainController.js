module.exports = {
    error404: (_, response) => {
        response.status(404).json({error: `Erreur 404: la page n'a pas été trouvée!`});
    }
} 