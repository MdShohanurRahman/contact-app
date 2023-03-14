<template>
  <SignUpForm/>
</template>

<script>
import SignUpForm from "@/components/SignUpForm";

export default {
  name: "SignUpView",
  components: {SignUpForm},
  created() {
    document.title = "SignUp | ContactApp";
  }
}
</script>

<style scoped>

</style>