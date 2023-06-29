<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="localUser.name" label="Name"></v-text-field>

      <v-text-field v-model="localUser.email" label="Email"></v-text-field>

      <v-text-field
        v-if="!userId"
        v-model="localUser.password"
        label="Password"
        type="password"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">{{
        userId ? "Update" : "Create"
      }}</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { ref } from "vue";
import { IUser } from "@/repositories/interface";
import { Field, Form, ErrorMessage } from 'vee-validate';

export default {
  components: {},
  props: {
    user: { type: Object as PropType<IUser> },
    userId: { type: Number },
    onSubmit: { type: Function },
  },
  setup(props) {
    const localUser = ref<IUser>(props?.user || { email: "", name: "" });
    const submitForm = () => {
      props.onSubmit && props.onSubmit(localUser.value);
    };

    return { localUser, submitForm };
  },
};
</script>
