<template>
  <v-container>
    <router-link :to="{ name: 'UserCreate' }">
      <v-btn color="primary" :to="{ name: 'UserCreate' }">Create</v-btn>
    </router-link>
    
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
        <router-link :to="{ name: 'UserForm', params: { userData: item.id } }">Edit</router-link>
      </td>
    </tr>
    </tbody>
  </v-table>
  </v-container>
 
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const users = computed(() => store.getters['getUsers']);

    store.dispatch('fetchUsers');

    return { users };
  },
};
</script>

