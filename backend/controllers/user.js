const jwt = require('jsonwebtoken');
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

exports.login = (req, res, next) => {
  User.findOne({ where: {email: req.body.email} }).then(
    (user) => {
      if (!user) {
        return res.status(401).json({
          error: 'User not found!'
          
        });
      }
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            return res.status(401).json({
              error: 'Incorrect password!'
            });
          }
          const token = jwt.sign(
            { userId: user.id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '4h' });
          res.status(200).json({
            email: user.email,
            userId: user.id,
            token
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error.message || error
          });
        }
      );
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error.message || error
      });
    }
  );
};

exports.deleteUser = (req, res, next) => {
  User.findOne({ id: req.params.id }).then(
    (user) => {
      User.destroy({where:{ id: req.params.id }}).then(
        () => {
          res.status(200).json({
            message: 'User Deleted!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
    }
  );
};

//Use different API method for sequelize