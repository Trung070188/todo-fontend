<template>
  <UserForm @submit="handleCreate" />
</template>
<script lang="ts">
import UserForm from './UserForm.vue';
import { UserRepository } from '@/repositories/users/UserRepository';

export default {
  components: { UserForm },
  setup() {
    const userRepository = new UserRepository();

    return {
      handleCreate: (val) => {
        userRepository.post(val)
        .then(()=> {
          console.log('create ok');
        })
        .catch((error)=> {
          console.error(error);
        })
      },
    };
  },
};
</script>
