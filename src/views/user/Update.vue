<template>
  <UserForm v-if="user" @submit="handleUpdate" :user="user" :userId="user.id" />
</template>

<script lang="ts">
import UserForm from "./UserForm.vue";
import { ref, inject } from "vue";
import { IUser } from "@/repositories/interface";

export default {
  components: { UserForm },
  props: ["id"],
  setup(props) {
    const user = ref(null);
    const repository = inject("repository") as Function;
    const userRepository = repository("user");

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
      handleUpdate: (val: IUser) => {
        userRepository
          .put(val.id, val)
          .then(() => {
            console.log("ok");
          })
          .catch((error) => {
            console.error(error);
          });
      },
      user,
    };
  },
};
</script>
