module.exports = {

    // createUser: async (req, res) =>  {
    //     console.log("je vais créer un user!");
    //     // res.send('Expecting a POST request');

    //     const newUser = await User.create({
    //         first_name: 'Jane',
    //         last_name: "Doe",
    //         email: "jane.doe@lcdmn.org",
    //         password: "passwordEnClair"
    //     });
    //     res.json(newUser);
    //     // console.log(newUser.toJSON());
    //     console.log('Creating new user, trying...');
    // },

    createUser: async (req, res) => {
        console.log("je suis dans createUser!");
        try {
            const { first_name, last_name, email, password} = req.body;

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
                // n crée notre User
                // build = crée une entité non sauvegardée
                // a ce stade, on n'a pas encore parlé a SQL !
                let newUser = User.build({ first_name, last_name, email, password });
                console.log("Hey!!! Je suis dans le build newUser!");

                // // si la first_name est présente dans le body, je vais la set
                // if (first_name) { // si un first_name est donnée dans le body
                //     // alors... je la set
                //     newUser.first_name = first_name;
                // }

                // on sauvegarde l'entité
                await newUser.save();
                console.log("J'AI SAUVEGARDé UN NOUVEAU USER !!!" + newUser);
                // on renvoie l'entité créée en JSON
                res.json(newUser);
                console.log("Voici mon NOUVEAU USER !!!" + newUser);
            }
        } catch {
            console.log("Je suis dans mon catch error!");
            console.log(error);
            res.status(500).json(error);
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