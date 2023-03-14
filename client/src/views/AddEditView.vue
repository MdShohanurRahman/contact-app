<template>
  <p class="h3">{{title}}</p>
  <ContactForm/>
</template>

<script>
import ContactForm from "@/components/ContactForm";
export default {
  name: "AddEditView",
  components: {
    ContactForm
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: ""
      }
    }
  },
  created() {
    document.title = `${this.title} | ContactApp`;
  },
  computed: {
    contactId() {
      return this.$route.params.id
    },
    title() {
      return this.contactId ? "Edit Contact" : "Add Contact"
    }
  }
}
</script>

<style scoped>

</style>