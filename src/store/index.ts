// store/index.js
import { createStore } from 'vuex';
import users from './users';
import login from './login';

const store = createStore({
  modules: {
    users,
    login
  },
});

export default store;