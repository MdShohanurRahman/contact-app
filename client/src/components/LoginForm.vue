<template>
  <form @submit.prevent="login">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          required>
      <div class="invalid-feedback">Please choose a username.</div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
          v-model="password"
          type="password"
          class="form-control"
          id="password" required>
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
    <button type="submit" class="btn btn-secondary" @click="signUp">SignUp</button>
  </form>
</template>

<script>
import ApiService from "@/service/ApiService";

export default {
  name: "LoginForm",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      ApiService
          .login({email: this.email, password: this.password})
          .then(response => {
            const { accessToken } = response.data
            localStorage.setItem('token', accessToken)
            setTimeout(() => {
              this.$router.push({name: "Contacts"})
            }, 300)
          })
          .catch(error => {
            console.log(error)
          })
    },
    signUp() {
      this.$router.push({name: "SignUp"})
    }
  }
}
</script>

<style scoped>

</style>