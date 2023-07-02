<!-- <template>
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
</template> -->

<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="localUser.name"
        label="Name"
        :error-messages="nameError"
      ></v-text-field>

      <v-text-field
        v-model="localUser.email"
        label="Email"
        :error-messages="emailError"
      ></v-text-field>

      <v-text-field
        v-if="!userId"
        v-model="password"
        label="Password"
        type="password"
        :error-messages="passwordError"
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
import { useField, useForm } from "vee-validate";
export default {
  components: {},
  props: {
    user: { type: Object as PropType<IUser> },
    userId: { type: Number },
    onSubmit: { type: Function },
  },

  setup(props) {
    const localUser = ref<IUser>(props?.user || { email: "", name: "" });
    console.log(localUser.value.name);

    const { value: name, errorMessage: nameError } = useField(
      "name",
      (value: string) => {
        if (!value) {
          return "Name is required";
        }
        return true;
      }
    );

    const { value: email, errorMessage: emailError } = useField(
      "email",
      (value: string) => {
        if (!value) {
          return "Email is required";
        }
        if (!/\S+@\S+\.\S+/.test(value)) {
          return "Invalid email format";
        }
        return true;
      }
    );

    const { value: password, errorMessage: passwordError } = useField(
      "password",
      (value: string) => {
        if (!props.userId && !value) {
          return "Password is required";
        }
        return true;
      }
    );

    const submitForm = () => {
      props.onSubmit && props.onSubmit(localUser.value);
    };

    return {
      name,
      email,
      localUser,
      password,
      nameError,
      emailError,
      passwordError,
      submitForm,
    };
  },
};
</script>
