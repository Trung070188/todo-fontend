import { login } from '@/api/config';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    token: null,
  },
  getters: {
   token: state => state.token
  },
  mutations: {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token); // Lưu token vào localStorage
      },
      restoreToken(state) {
        const token = localStorage.getItem('token');
        if (token) {
          state.token = token;
        }
      },
  },
  actions: {
    login({ commit }, { email, password }) {
      login(email, password)
        .then((token) => {
            console.log(token);
          commit('setToken', token);
        })
        .catch((error) => {
          console.error('Login failed:', error);
        });
    },
  },
});

export default store;
