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
export default {
  name: "ContactsView",
  data() {
    return {
      contacts: [
        {id: 1, name: "shohan", email: "s@gmail.com", phone: "0121"},
        {id: 2, name: "shohan", email: "s@gmail.com", phone: "0121"},
        {id: 3, name: "shohan", email: "s@gmail.com", phone: "0121"},
        {id: 4, name: "shohan", email: "s@gmail.com", phone: "0121"},
      ]
    }
  },
  created() {
    document.title = "Contacts | ContactApp";
  },
  mounted() {
    // call api
  },
  methods: {
    addContact() {
      this.$router.push({ name: 'Add'});
    },
    editContact(contact) {
      this.$router.push({ name: 'Edit', params: { id: contact.id }});
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