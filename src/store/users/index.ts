import { UserRepository } from '@/repositories/users/UserRepository';
import { User } from '@/repositories/interface';

const userRepository = new UserRepository(); // Create an instance of UserRepository

const users = {
  state: () => ({
    users: new Array<Users>(),
  }),
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await userRepository.get(); 
        const users = response.data; 
        commit('SET_USERS', users);
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch users');
      }
    },
    async create({ commit }, data :any) {
        try {
            console.log(data);
          const users = await userRepository.post(data);
          commit('SET_USERS', users);
        } catch (error) {
          console.error(error);
          throw new Error('Failed to fetch users');
        }
      },
   
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
};

export default users;
