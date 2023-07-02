<template>
  <UserForm @submit="handleCreate" />
</template>
<script lang="ts">
import UserForm from "./UserForm.vue";
import { UserRepository } from "@/repositories/users/UserRepository";
import { inject, ref } from "vue";
import { IUser } from "@/repositories/interface";
import { useRouter } from "vue-router";
import toastr from "toastr";
import "toastr/toastr.scss";

export default {
  components: { UserForm },
  setup(props) {
    const routes = useRouter();
    const repository = inject("repository") as Function;
    const userRepository = repository("user");
    return {
      handleCreate: async (val: IUser) => {
        try {
          const response = await userRepository.post(val);
          toastr.success("ok");
          routes.push("/users");
        } catch (response) {
          toastr.error(response.response.data.message);
        }
      },
    };
  },
};
</script>
