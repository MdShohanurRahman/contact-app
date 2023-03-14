<template>
  <LoginForm/>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
  name: "LoginView",
  components: {LoginForm},
  created() {
    document.title = "Login | ContactApp";
  }
}
</script>

<style scoped>

</style>