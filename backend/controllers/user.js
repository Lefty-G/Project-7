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
  User.findOne({ email: req.body.email }).then(
    (user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error('User not found!')
        });
      }
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error('Incorrect password!')
            });
          }
          const token = jwt.sign(
            { userId: user.id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' });
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
        error: error
      });
    }
  );
};

// exports.deleteSauce = (req, res, next) => {
//   Sauce.findOne({ _id: req.params.id }).then(
//     (sauce) => {
//       const filename = sauce.imageUrl.split('/images/')[1];
//       fs.unlink('images/' + filename, () => {
//         Sauce.deleteOne({ _id: req.params.id }).then(
//           () => {
//             res.status(200).json({
//               message: 'Deleted!'
//             });
//           }
//         ).catch(
//           (error) => {
//             res.status(400).json({
//               error: error
//             });
//           }
//         );
//       });
//     }
//   );
// };

//Use different API method for sequelize