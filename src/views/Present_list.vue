<template>
  <v-container>
    <v-col cols="12">
      <v-card class="mx-auto" tile>
        <v-list-item v-for="(present, id) in presents" :key="id" @click="onclick(present)">
          <v-list-item-content>id:{{present.id }}, Present name:{{present.name }}</v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  methods: {
    onclick: async function(item) {
      alert(JSON.stringify(item.id));
    }
  },

  data() {
    return {
      presents: []
    };
  },
  async mounted() {
    var response = await fetch("http://localhost:8080/items/list", {
      method: "GET",
      credentials: "same-origin"
    });
    // console.log(response);
    if (response.ok) {
      var data = await response.json();
      this.presents = data.presents;
    } else {
      console.log(response.statusText);
    }
  }
};
</script>
