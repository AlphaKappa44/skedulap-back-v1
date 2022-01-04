// const {User} = require('../models/userModel');

module.exports = {


    createUser: async (req, res) => {
    
        console.log("je suis dans la méthode createUser!");
       

        try {
            const {first_name, last_name, email, password} = req.body;

            let bodyErrors = [];
            if (!first_name) {
                bodyErrors.push('First name cannot be empty');
                console.log("je suis dans !first_name");
            }
            if (!last_name) {
                bodyErrors.push('Last name cannot be empty');
                console.log("je suis dans !last_name");
            }
            if (!email) {
                bodyErrors.push('Email cannot be empty');
                console.log("je suis dans !email");
            }
            if (!password) {
                bodyErrors.push('Password cannot be empty');
                console.log("je suis dans !password");
            }

            if (bodyErrors.length > 0) { // si j'ai des erreurs
                res.status(400).json(bodyErrors)
                console.log("Je passe dans Body errors!");
                
                
            } else {
                console.log("Hey!!! Je suis dans le build newUser!");
                // On récupère notre User depuis la méthode POST
                console.log("Je reçois bien mon user depuis mon POST:");
                console.log(req.body);

                let newUser = req.body;
                console.log(newUser);
                res.status(200).json(newUser);
                
                // build = crée une entité non sauvegardée
                // a ce stade, on n'a pas encore parlé a SQL !
                // let newUser = User.build({first_name, last_name, email, password} );
                

                // // si la first_name est présente dans le body, je vais la set
                // if (first_name) { // si un first_name est donnée dans le body
                //     // alors... je la set
                //     newUser.first_name = first_name;
                // }

                // on sauvegarde l'entité
                // await newUser.save();
                // console.log("J'AI SAUVEGARDé UN NOUVEAU USER !!!" + newUser);
                // on renvoie l'entité créée en JSON
                // res.json(newUser);
                // console.log("Voici mon NOUVEAU USER !!!" + newUser);
            }
        } catch {
            console.log("Je suis dans mon catch error!");
            // console.error();

            console.log("Mon user est dans le catch error:");
            // console.log(req.body);
            res.status(500).json('Mon user est dans le catch error');
            // res.json('errors');
        }
    },


    getUsers: (req, res) => {

        const users = [
            {
                email: 'email@lcdmn.org',
                password: 'completementCryped',
                first_name: 'Jean',
                last_name: 'Dupont'
            },

            {
                email: 'email2@lcdmn.org',
                password: 'completementCrypado',
                first_name: 'René',
                last_name: 'Lembrouille'
            }
        ]
        res.json(users);
    },

    getUserId: (req, res) => {

        res.status(200).json({ message: req.params.userid });
        
        console.log(req.params.userid);
        
    
    }
};
