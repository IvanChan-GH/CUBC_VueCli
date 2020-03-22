<template>
  <v-container>
    <v-col cols="12" sm="6">
      <v-row>
        <v-text-field label="Borrow History" single-line></v-text-field>
      </v-row>

      <v-row>
        <span class="display-1 mb-2" color="#385F73">Boardgame</span>
      </v-row>
      <v-list-item
        three-line
        v-for="(boardgame, bkid) in boardgames"
        :key="bkid"
        @click="onclickboardgame(boardgame)"
      >
        <v-list-item-content>
          <v-list-item-title>{{boardgame.name }}</v-list-item-title>
          <v-list-item-subtitle>Expiry Date:{{new Date(boardgame.duedate).getDate()+'/'+(new Date(boardgame.duedate).getMonth()+1)+"/"+new Date(boardgame.duedate).getFullYear() }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-row>
        <span class="display-1 mb-2" color="#385F73">Book</span>
      </v-row>
      <v-list-item
        three-line
        v-for="(book, bkid2) in books"
        :key="bkid2"
        @click="onclickbook(book)"
      >
        <v-list-item-content>
          <v-list-item-title>{{book.name }}</v-list-item-title>
          <v-list-item-subtitle>Expiry Date:{{new Date(book.duedate).getDate()+'/'+(new Date(book.duedate).getMonth()+1)+"/"+new Date(book.duedate).getFullYear() }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-row>
        <span class="display-1 mb-2" color="#385F73">Activity Materials</span>
      </v-row>
      <v-list-item
        three-line
        v-for="(material, bkid3) in materials"
        :key="bkid3"
        @click="onclickbook(material)"
      >
        <v-list-item-content>
          <v-list-item-title>{{material.name }}</v-list-item-title>
          <v-list-item-subtitle>Expiry Date:{{new Date(material.duedate).getDate()+'/'+(new Date(material.duedate).getMonth()+1)+"/"+new Date(material.duedate).getFullYear() }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-container>
</template>

<script>
export default {
  methods: {
    onclickboardgame: async function(item) {
      this.$router.push("/boardgame_detail_removebooking/" + item.id);
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
      "http://localhost:8080/user/" + this.$cookie.get("uid") + "/bookingitems",
      {
        method: "GET",
        credentials: "same-origin"
      }
    );
    if (response.ok) {
      var data = await response.json();
      // alert(JSON.stringify(data))
      this.boardgames = data.boardgames.bookboardgame;
      this.books = data.books.bookbook;
      this.materials = data.materials.bookmaterial;
    } else {
      console.log(response.statusText);
    }
  }
};
</script>
