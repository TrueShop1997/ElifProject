import mongoose from 'mongoose';
import {User, Card} from '../models';


export function getCards(req) {  // get
  const ownerId = mongoose.Types.ObjectId("582361bc6281c1d2d18854a6");
  return new Promise((resolve, reject) => {
    console.log('getCards from actions/cards');
    setTimeout(() => {
      let cards = req.session.cards;
      if (!cards){
        req.session.cards = cards;
        resolve(cards = User.findById(ownerId).distinct('cards'));
      }
      reject('err');
    },500);
  });
}

export function addNewCard(req) {  // get
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ownerId = mongoose.Types.ObjectId("582361bc6281c1d2d18854a6"); // temporary
      console.log('starting addNewCard');
      getUserById(ownerId).then(data => {
        const newcard = new Card({
          number: numberGenerator(req.body.cardType),
          name: req.body.cardName,
          pin: getPin(),
          cvv: getCVV(),
          explDate: getExplDate(),
          owner: ownerId
        });
        const user = data;
        user.cards.push(newcard);
        console.log(newcard + '  is pushed and ready to save');
        resolve(user.save());
        reject('err');
      });
    }, 1500);
  });
}

export function updateCard(req) {  // post
  return new Promise((resolve, reject) => {
    User.update(
      {'cards._id' : req.body._id },
      {'$set': {
        'cards.name': req.body.cardName
      }},
    );
    resolve('ok');
    reject('err');
  });
}

export function deleteCard(req){   // get
  return new Promise((resolve, reject) => {
    User.update(
      {'$pull': {
        'cards._id' : req.body._id
      }},
    );
    resolve('ok');
    reject('err');
  });
}


function getUserById() {
  const ownerId = mongoose.Types.ObjectId("582361bc6281c1d2d18854a6");
  return User.findById(ownerId);
}

function numberGenerator(type) {
  const visaId = 401997;
  const masterCardId = 551997;
  const cardId = Math.floor(Math.random() * (10000000000 - 999999999)) + 999999999;
  if(type === 'VISA'){
    return "" + visaId + cardId;
  } else {
    return "" + masterCardId + cardId;
  }
  //TODO: add Luhn algorithm
}

function getPin() {
  return Math.floor(Math.random() * (10000 - 999)) + 999;
}

function getCVV() {
  return Math.floor(Math.random() * (1000 - 99)) + 99;
}

function getExplDate() {
  let now = new Date;
  return(new Date(now.getMonth(), now.getFullYear() + 3));
}
