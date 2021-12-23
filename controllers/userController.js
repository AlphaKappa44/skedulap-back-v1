module.exports = {

    getUsers: (req, res) => {

        const data = [
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
        res.json(data);
    },

    getUserId: (req, res) => {

        res.status(200).json({ message: req.params.userid });
        console.log(req.params.userid);
    }
};
