<template>
  <div class="row mb-3">
    <label for="name" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input class="form-control" id="name" v-model="formData.name">
    </div>
  </div>
  <div class="row mb-3">
    <label for="email" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email"  v-model="formData.email">
    </div>
  </div>
  <div class="row mb-3">
    <label for="phone" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
      <input class="form-control" id="phone"  v-model="formData.phone">
    </div>
  </div>
  <button class="btn btn-primary mt-2" @click="submitHandler">Submit</button>
</template>

<script>
import ApiService from "@/service/ApiService";

export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: ""
      }
    }
  },
  created() {
    if (this.$route.params.id) {
      this.getContact(this.$route.params.id)
    }
  },
  methods: {
    getContact(id) {
      ApiService
          .getContact(id)
          .then(response => {
            this.formData = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    submitHandler() {
      const payload = {
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone
      }
      if (this.$route.params.id) {
        this.updateContact(payload)
      } else {
        this.addContact(payload)
      }
    },
    addContact(payload) {
      ApiService
          .addContact(payload)
          .then(response => {
            console.log(response)
            this.$router.push({name: "Contacts"})
          })
          .catch(error => {
            console.log(error)
          })
    },
    updateContact(payload) {
      ApiService
          .updateContact(this.$route.params.id, payload)
          .then(response => {
            console.log(response)
            this.$router.push({name: "Contacts"})
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