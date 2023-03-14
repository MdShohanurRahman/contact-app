<template>
  <form @submit.prevent="signUp">
    <div class="mb-3">
      <label for="username" class="form-label">UserName</label>
      <input
          v-model="username"
          class="form-control"
          id="username"
          required>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
          v-model="password"
          type="password"
          class="form-control"
          id="password" required>
    </div>
    <button type="submit" class="btn btn-primary">SignUp</button>
  </form>
</template>

<script>
import ApiService from "@/service/ApiService";

export default {
  name: "SignUpForm",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    }
  },
  methods: {
    async signUp() {
      ApiService
          .signUp({username: this.username, email: this.email, password: this.password})
          .then(response => {
            this.$store.commit('login', response.data.accessToken)
            this.$router.push({name: "Login"})
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>

</style>