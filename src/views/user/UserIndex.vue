<template>
  <v-container>
    <router-link :to="{ name: 'UserForm' }">
      <v-btn color="primary" :to="{ name: 'UserForm' }">Create</v-btn>
    </router-link>
    <v-btn color="primary" class="ml-2" @click="logout">Logout</v-btn>
    
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        ID
      </th>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Email
      </th>
      <th class="text-left">
        Action
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="item in users.data"
      :key="item.id"
    >
      <td>{{item.id}}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.email }}</td>
      <td>
      </td>
    </tr>
    </tbody>
  </v-table>
  </v-container>
 
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const users = computed(() => store.getters['getUsers']);
    console.log(users)

    const logout = () => {
      store.dispatch('logout')
        .then(() => {
          router.push('/login');
        })
        .catch((error) => {
          console.log(error);
        });
    };

    store.dispatch('fetchUsers');

    return { users, logout };
  },
};
</script>

