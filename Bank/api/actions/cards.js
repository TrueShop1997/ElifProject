import mongoose from 'mongoose';
// import generator from 'creditcard-generator';
import {Card, CardSchema} from '../models';
// import {User} from '../models';


export function getAllCards() {
  return new Promise((resolve, reject) => {
    //const cardsMap = [];
    const ownerId = mongoose.Types.ObjectId("582361bc6281c1d2d18854a6");
    //const user = User.findById(id);
    // user.cards.forEach(function(card) {
    //   cardsMap.push(card);
    // });
    resolve(Card.find({owner : ownerId}));
    reject('err');
  });
 // return (User.findById(id));
}

export function deleteCard(cardID){
  return Card.findById(cardID).remove();
}

export function addNewCard(type) {
   return new Promise((resolve, reject) => {
    const ownerId = mongoose.Types.ObjectId("582361bc6281c1d2d18854a6");
    //const user = User.findById(id);
    const card = new Card({
      _id     : mongoose.Types.ObjectId(),
      number  : numberGenerator(type),
      pin     : getPin(),
      cvv     : getCVV(),
      explDate: getExplDate(),
      owner   : ownerId
    });
    console.log(card);
    //user.cards.push(card);
     // user.cards.push(card)
     card.save();
    resolve('ok');
    // resolve(user.save());
    // reject('err');
    // })
})
}

function numberGenerator(type) {
  const visaId = 401997;
  const masterCardId = 551997;
  const cardId = Math.floor(Math.random() * (10000000000 - 999999999)) + 999999999;
  if(type){
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

