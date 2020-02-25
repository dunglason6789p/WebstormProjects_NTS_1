<template>
  <div class="session-banner">
    <v-container px-0>
      <v-layout row wrap>
        <v-flex xs12 sm10 md6 lg5 mx-auto>
          <div class="mb-70">
            <router-link to="/" class="d-block text-xs-center"><img src="/static/img/session-logo.png" /></router-link></p>
          </div>
          <div class="session-block">
            <div class="session-head text-xs-center">
              <div class="div-icon mb-3">
                <i class="ti-lock font-2x"></i>
              </div>
              <h3 class="mb-4">Login To Admin</h3>
              <p class="fs-14 px-5">Enter username and password to access control panel of Vuely.</p>
            </div>
            <v-form v-model="valid" class="mb-4">
              <v-text-field label="E-mail ID" v-model="email" :rules="emailRules" required></v-text-field>
              <v-text-field label="Password" v-model="password" type="password" :rules="passwordRules" required></v-text-field>
              <v-checkbox label="Remember me" v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" required></v-checkbox>
              <v-btn @click="submit" block class="btn-gradient-primary">Login Now</v-btn>
              <v-btn @click="submit" block class="btn-gradient-warning">Create Account</v-btn>
            </v-form>
            <p class="text-xs-center mb-0 log-link"><router-link to="/session/login">Forgot password?</router-link></p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    submit() {
      console.log("Login");
    }
  }
};
</script>
