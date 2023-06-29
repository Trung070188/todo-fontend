<template>
  <v-container>
    <router-link :to="{ name: 'CreateUser' }">
      <v-btn color="primary">Create</v-btn>
    </router-link>
    <v-btn color="primary" class="ml-2" @click="logout">Logout</v-btn>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users.data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>
            <router-link :to="{ name: 'UpdateUser', params :{id: item.id}}">
              <v-btn color="primary">Edit</v-btn>
            </router-link>
            <v-btn color="red" class="ml-2" @click="remove(item.id)"
              >Detele</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import BaseTable from "@/components/BaseTable.vue"
import { UserRepository } from '@/repositories/users/UserRepository';


export default {
  components: {BaseTable},
  setup() {
    const userRepository =  new UserRepository();
    const store = useStore();
    const router = useRouter();
    const users = computed(() => store.getters["getUsers"]);

    const logout = () => {
      store
        .dispatch("logout")
        .then(() => {
          router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const remove = (id) => {
     userRepository.delete(id)
     .then(() => {
      console.log('delete ok ');
     })
     .catch((error) => {
      console.log(error);
     })
    };

    store.dispatch("fetchUsers");

    return { users, logout, remove };
  },
};
</script>
