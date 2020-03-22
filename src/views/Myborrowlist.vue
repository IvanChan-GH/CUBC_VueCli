<template>
  <v-container>
    <v-col cols="12" sm="6">
      <v-row>
        <v-text-field label="Borrow History" single-line></v-text-field>
      </v-row>

      <v-row>
        <span class="display-1 mb-2" style="color: #385F73">Boardgame</span>
      </v-row>
      <v-list-item three-line v-for="(boardgame, bookid) in boardgames" :key="'boardgame' + bookid">
        <v-list-item-content>
          <v-list-item-title>{{boardgame.name }}</v-list-item-title>
          <v-list-item-subtitle :class="{ 'text-red': checkExpiryDate(boardgame.duedate) }">Expiry Date:{{ formatDate(boardgame.duedate) }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-row>
        <span class="display-1 mb-2" color="#385F73">Book</span>
      </v-row>
      <v-list-item three-line v-for="(book, bookid) in books" :key="'book' + bookid">
        <v-list-item-content>
          <v-list-item-title>{{book.name }}</v-list-item-title>
          <v-list-item-subtitle>Expiry Date:{{ formatDate(book.duedate) }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

       <v-row>
        <span class="display-1 mb-2" color="#385F73">Activity Materials</span>
      </v-row>
      <v-list-item three-line v-for="(book, bookid) in books" :key="'book2' + bookid">
        <v-list-item-content>
          <v-list-item-title>{{book.name }}</v-list-item-title>
          <v-list-item-subtitle>Expiry Date:{{ formatDate(book.duedate) }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

    </v-col>
  </v-container>
</template>

<script>
export default {
  methods: {
    formatDate(date) {
      return new Date(date).getDate()+'/'+(new Date(date).getMonth()+1)+"/"+new Date(date).getFullYear();
    },
    checkExpiryDate(expiryDate) {
      expiryDate = new Date(expiryDate);
      expiryDate = expiryDate.setDate(expiryDate.getDate() - 3);
      var now = new Date();
      if (now >= expiryDate) {
        return true
      }
      return false;
    }
  },

  data() {
    return {
      boardgames: [],
      books: [],
      materials: []
    };
  },

  async mounted() {
    var response = await fetch(
      "http://localhost:8080/user/" +
        this.$cookie.get("uid") +
        "/borrowitems",
      {
        method: "GET",
        credentials: "same-origin"
      }
    );
    if (response.ok) {
      var data = await response.json();
      this.boardgames = data.boardgames.borrowboardgame;
      this.books = data.books.borrowbook;
      this.materials = data.materials.borrowmaterials;

    } else {
      console.log(response.statusText);
    }

    
  }
};
</script>

<style scoped>
  .text-red {
    color: red !important;
  }
</style>