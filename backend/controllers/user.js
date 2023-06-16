// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require("../models");



exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save().then(
        () => {
          res.status(201).json({
            message: 'User added succesfully!'
          });
        }
      ).catch(
        error => {
          console.log(error);
          res.status(500).json({ error: error.message || error })
        });
    }
  );
};