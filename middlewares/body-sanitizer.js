const sanitizer = require('sanitizer');

const bodySanitizer = (req, res, next) => {
    // est-ce que j'ai un  body sur ma requete ?
    if (req.body) {
        // oui ? -> je nettoie tous les champs du body.
        // je parcours tous les champs du body
        // en dautres termes, toutes les clés de l'objet
        // avec un for ... in

        for (let propName in req.body) {
            // pour chaque clé, j'apelle sanitizer, et je stock le résultat
            req.body[propName] = sanitizer.escape( req.body[propName] );
        }

        next();
    }
}

module.exports = bodySanitizer;