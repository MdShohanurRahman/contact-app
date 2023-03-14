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
  </form>
</template>

<script>
//import ApiService from "@/service/ApiService";

export default {
  name: "LoginForm",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      //alert("login")
      localStorage.setItem('token', "myToken")
      // const response = await ApiService.login({email: this.email, password: this.password })
      // if (response.success) {
      //   this.$store.commit('login', response.token)
      //   this.$router.push('/contacts')
      // } else {
      //   alert(response.message)
      // }
    }
  }
}
</script>

<style scoped>

</style>