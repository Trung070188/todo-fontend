<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">         
          <v-card elevation="0">
            <div class="text-center">
              <h1 class="mb-2">Login</h1>
            </div>
            <a href="https://edu-fedorae.netlify.app" name="Fedorae Education" title="Fedorae Education" target="_blank">
              <v-img src="@/assets/logo.png" alt="Fedorae Education Log" contain height="200"></v-img>
            </a>
            <v-card-text>
              <v-form @submit.prevent="submitLogin()">
                <v-text-field v-model="email" label="Enter your email" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" outlined></v-text-field>
                <v-text-field v-model="password" label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" suffix="| Forgot?" class="rounded-0" outlined></v-text-field>
                <v-btn class="rounded-0" x-large block type="submit">Login</v-btn>
                <v-card-actions class="text--secondary">
                  <v-checkbox color="#000000" label="Remember me"></v-checkbox>
                  <v-spacer></v-spacer>
                  <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                  No account?
                  <router-link :to="{ name: 'Register'}">Sign Up</router-link>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const store = useStore();
    const router = useRouter();

    const submitLogin = () => {
      store
        .dispatch('login', { email: email.value, password: password.value })
        .then(() => {
          router.push('/users');
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return { email, password, submitLogin };
  },
};
</script>


<style lang="css" scoped>
</style>