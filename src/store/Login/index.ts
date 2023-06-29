import { login } from '@/api/config';
import { createStore } from 'vuex';

interface UserLoginState {
  token: string;
}

interface UserLoginGetters {
  token(state: UserLoginState): string;
}

interface UserLoginMutations {
  setToken(state: UserLoginState, token: string): void;
  restoreToken(state: UserLoginState): void;
}

interface UserLoginActions {
  login({ commit }: { commit: Function }, { email, password }: { email: string; password: string }): void;
  logout({commit} : {commit : Function}):void;
}

const userLogin = {
  state: {
    token: '',
  } as UserLoginState,
  getters: {
    token: (state: UserLoginState): string => state.token,
  } as UserLoginGetters,
  mutations: {
    setToken(state: UserLoginState, token: string): void {
      state.token = token;
      localStorage.setItem('token', token);
    },
    restoreToken(state: UserLoginState): void {
      const token = localStorage.getItem('token');
      if (token) {
        state.token = token;
      }
    },
  } as UserLoginMutations,
  actions: {
    login({ commit }: { commit: Function }, { email, password }: { email: string; password: string }): void {
      login(email, password)
        .then((token: string) => {
          commit('setToken', token);
        })
        .catch((error: Error) => {
          console.error('Login failed:', error);
        });
    },
    logout({commit}: {commit : Function}) : void {
      commit('setToken', ''); 
      localStorage.removeItem('token');
    }

  } as UserLoginActions,
};

export default userLogin;
