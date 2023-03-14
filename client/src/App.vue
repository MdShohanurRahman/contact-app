<template>
  <div class="container-fluid">
    <AppNavbar/>
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
  }
}
</script>

<style></style>
