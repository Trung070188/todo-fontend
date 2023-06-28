<template>
  <UserForm v-if="user" @submit="handleUpdate" :user="user" :userId="user.id" />
</template>

<script lang="ts">
import UserForm from './UserForm.vue';
import { ref } from 'vue';
import { UserRepository } from '@/repositories/users/UserRepository';
import { useRoute } from 'vue-router';

export default {
  components: { UserForm },
  props: ['id'],
  setup(props) {
    const user = ref(null); 

    const userRepository = new UserRepository();

    const getUserId = async () => {
      try {
        const response = await userRepository.getById(props.id);
        user.value = response.data.data;
      } catch (error) {
        console.error(error);
      }
    };

    getUserId();

    return {
      handleUpdate: (val) => {
        console.log(val.id);
        userRepository.put(val.id ,val)
        .then(() => {
          console.log('ok');
        })
        .catch((error) => {
          console.error(error);
        })
      },
      user,
    };
  },
};
</script>
