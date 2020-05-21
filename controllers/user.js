const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/utilisateur');
const jwt = require('jsonwebtoken');

router.route('/add').post((req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        expert: req.body.expert.split(", ")
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
});
/*
router.route('/login').post((req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      res.status(200).json({
        userId: user._id,
        token: jwt.sign(
          { userId: user._id },
          'RANDOM_TOKEN_SECRET',
          { expiresIn '24h' }
        )
      });
    })
    .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};
*/

router.route('/get_all/:tag').get((req, res) => {
  User.find({ expert: req.params.expert })
    .then(user => res.status(200).json(user))
    .catch((error) => {
      res.status(404).json({ error: error });
    });
});

router.route('/get_one/:username').get((req, res) => {
 //  console.log(req.params.username)
   User.findOne({
    username: req.params.username})
      .then(user => res.status(200).json(user))
      .catch((error) => {
        res.status(404).json({ error: error });
    }
  );
});

module.exports = router;
/*

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
*/
