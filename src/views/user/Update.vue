<template>
  <UserForm v-if="user" @submit="handleUpdate" :user="user" :userId="user.id" />
</template>

<script lang="ts">
import UserForm from "./UserForm.vue";
import { ref, inject, onMounted } from "vue";
import { IUser } from "@/repositories/interface";
import { useRouter } from "vue-router";
import toastr from "toastr";
import "toastr/toastr.scss";


export default {
  components: { UserForm },
  props: ["id"],
  setup(props) {
    const route = useRouter();
    const user = ref(null);
    const repository = inject("repository") as Function;
    const userRepository = repository("user");

    onMounted(async () => {
      try {
        const response = await userRepository.getById(props.id);
        user.value = response.data.data;
      } catch (e) {
        console.error(e);
      }
    });
    return {
      handleUpdate: async (val: IUser) => {
        try {
          const response = await userRepository.put(val.id, val);
          toastr.success('Đã sửa')
          route.push("/users");
        } catch (response){
          toastr.error(response.response.data.message)
        }
      },
      user,
    };
  },
};
</script>
