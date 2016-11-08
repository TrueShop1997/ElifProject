// import mongoose from 'mongoose';
import {User} from '../models';

export default function addUser(req, params) {
  const user = req.body;
  console.log('addUser start');

    User.save(function (err, user) {
      if (err) return console.error(err);
    })
}
