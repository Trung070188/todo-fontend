<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card elevation="0">
            <div class="text-center">
              <h1 class="mb-2">Register</h1>
            </div>
            <a href="https://edu-fedorae.netlify.app" name="Fedorae Education" title="Fedorae Education" target="_blank">
              <v-img src="@/assets/logo.png" alt="Fedorae Education Log" contain height="200"></v-img>
            </a>
            <v-card-text>
              <v-form>
                <v-text-field label="Enter your name" name="name" prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined></v-text-field>
                <v-text-field label="Enter your email" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" outlined></v-text-field>
                <v-text-field label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
                <v-text-field label="Re-enter password" name="password" prepend-inner-icon="mdi-lock-outline" type="password" class="rounded-0" outlined></v-text-field>
                <v-btn class="rounded-0" color="#000000" x-large block dark>Register</v-btn>
                <v-card-actions class="text--secondary">
                  <v-spacer></v-spacer>
                  Already have an account?
                  <router-link :to="{ name: 'Login' }">Sign In</router-link>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
name: "app-register"
}
</script>

<style lang="css" scoped>
</style>