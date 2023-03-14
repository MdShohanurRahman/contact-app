<template>
  <div class="container-fluid">
    <AppNavbar v-if="showNavbar"/>
    <div class="container p-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";

export default {
  name: 'App',
  components: {
    AppNavbar
  },
  computed: {
    showNavbar() {
      return  !["/login", "/signup"].includes(this.$route.path)
    }
  }
}
</script>

<style></style>
