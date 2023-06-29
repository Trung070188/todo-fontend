<template>
  <UserForm @submit="handleCreate" />
</template>
<script lang="ts">
import UserForm from "./UserForm.vue";
import { UserRepository } from "@/repositories/users/UserRepository";
import { inject } from "vue";
import { IUser } from "@/repositories/interface";

export default {
  components: { UserForm },
  setup() {
    const repository = inject("repository") as Function;
    const userRepository = repository("user");
    console.log(repository);
    console.log(userRepository);
    return {
      handleCreate: (val: IUser) => {
        userRepository
          .post(val)
          .then(() => {
            console.log("create ok");
          })
          .catch((error: any) => {
            console.error(error);
          });
      },
    };
  },
};
</script>
