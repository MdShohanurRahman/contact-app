<template>
  <div>
    <div class="d-flex justify-content-between">
      <p class="h3">Contact List</p>
      <button type="button" class=" btn btn-secondary" @click="addContact()">Add New Contact</button>
    </div>

    <table class="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="contact in contacts" :key="contact.id">
        <td>{{ contact.name }}</td>
        <td>{{ contact.email }}</td>
        <td>{{ contact.phone }}</td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class=" btn btn-primary btn-sm" @click="editContact(contact)">Edit</button>
            <button type="button" class="btn btn-danger btn-sm" @click="deleteContact(contact)">Delete</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiService from "@/service/ApiService";

export default {
  name: "ContactList",
  data() {
    return {
      loading: false,
      contacts: []
    }
  },
  mounted() {
    this.getContacts()
  },
  methods: {
    getContacts() {
      this.loading = true
      ApiService
          .getContacts()
          .then(response => {
            this.loading = false
            this.contacts = response.data
          })
          .catch(error => {
            this.loading = false
            console.log(error)
          })
    },
    addContact() {
      this.$router.push({ name: 'Add'});
    },
    editContact(contact) {
      this.$router.push({ name: 'Edit', params: { id: contact._id }});
    },
    deleteContact(contact) {
      const confirm = window.confirm('Are you sure you want to delete this contact ?')
      if (confirm) {
        // delete
        console.log(contact)
      }
    }
  }
}
</script>

<style scoped>

</style>