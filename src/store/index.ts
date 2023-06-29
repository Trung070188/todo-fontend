// store/index.js
import { createStore } from 'vuex';
import users from './users';
import userLogin from './Login';

const store = createStore({
  modules: {
    users,
    userLogin
  },
});

export default store;