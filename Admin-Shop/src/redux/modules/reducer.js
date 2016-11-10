import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import auth from './auth';
<<<<<<< HEAD
import authA from './authA';
=======
>>>>>>> 24bf57ea28416c693882c5c7426155d45114730b
import counter from './counter';
import {reducer as form} from 'redux-form';
import info from './info';
import widgets from './widgets';
import hello from './hello';
<<<<<<< HEAD
import orders from './orders';
=======
>>>>>>> 24bf57ea28416c693882c5c7426155d45114730b

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
<<<<<<< HEAD
  authA,
  form,
  orders,
=======
  form,
>>>>>>> 24bf57ea28416c693882c5c7426155d45114730b
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  info,
  widgets,
  hello
});
