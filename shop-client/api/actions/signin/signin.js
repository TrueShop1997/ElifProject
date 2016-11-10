import User from '../../models/user';
import config from '../../../src/config';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-as-promised';

export default function signin(req) {
  return new Promise((resolve, reject) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
      if (err) {
        throw err;
      }
      if (!user) {
        reject({
          errorMessage: 'User not found'
        });
      } else {
        bcrypt.compare(password, user.password)
          .then(() => {
            const token = jwt.sign({ _id: user._id }, config.secret);
            req.session.user = user;
            resolve(token);
          })
          .catch(bcrypt.MISMATCH_ERROR, () => {
            reject({
              errorMessage: 'Bad credentials'
            });
          });
      }
    });
  });
};
