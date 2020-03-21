<template>
  <v-container>
    <v-col cols="12">
      <v-card class="mx-auto" tile>
        <v-list-item v-for="(book, id) in books" :key="id" @click="onclick(book)">
          <v-list-item-content>id:{{book.id }}, Book name:{{book.name }}</v-list-item-content>
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
      books: []
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
      this.books = data.books;
    } else {
      console.log(response.statusText);
    }
  }
};
</script>
