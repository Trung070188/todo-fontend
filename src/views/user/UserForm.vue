<template>
  <v-container>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="submitForm">
        <v-text-field
          v-model="name"
          label="Username"
          :value="isEditing ? userData.name : ''"
        ></v-text-field>

        <v-text-field
          v-model="email"
          label="Email"
          :value="isEditing ? userData.email : ''"
        ></v-text-field>

        <v-text-field
          v-if="!isEditing"
          v-model="password"
          label="Password"
          type="password"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2">{{ isEditing ? 'Update' : 'Create' }}</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';

export default {
  props: ['userData'],
  setup(props) {
    console.log(props);
    const email = ref('');
    const name = ref('');
    const password = ref('');
    const store = useStore();
    const isEditing = ref(false); 

    if (props.userData) {
      isEditing.value = true;
      email.value = props.userData.email;
      name.value = props.userData.name;
    }

    const submitForm = () => {
      const data = {
        email: email.value,
        name: name.value
      };

      if (!isEditing.value) {
        data.password = password.value;
      }

      if (isEditing.value) {
        store.dispatch('update', data)
          .then(() => router.push('/'))
          .catch(() => console.log('Error updating user'));
      } else {
        store.dispatch('create', data)
          .then(() => router.push('/'))
          .catch(() => console.log('Error creating user'));
      }
    };

    return { email, name, password, isEditing, submitForm };
  }
};
</script>
