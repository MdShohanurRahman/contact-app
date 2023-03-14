<template>
  <ContactList/>
</template>

<script>
import ContactList from "@/components/ContactList";
export default {
  name: "ContactsView",
  components: {
    ContactList
  },
  created() {
    document.title = "Contacts | ContactApp";
  }
}
</script>

<style scoped>

</style>