<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Created Time</th>
          <th class="text-left">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ new Date(user.createdAt).toLocaleString() }}</td>
          <td>{{ user.name }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "ShowUsers",

  data: () => ({
    users: []
  }),

  async mounted() {
    var response = await fetch(
      process.env.VUE_APP_API_BASE_URL + "/user/dummyUsers",
    );

    if (response.ok) {
      var data = await response.json();
      this.users = data.slice();
    } else {
      alert(response.status + ": " + response.statusText);
    }
  }
};
</script>