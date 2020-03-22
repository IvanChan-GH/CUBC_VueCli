<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card
          class="mb-3"
          color="#385F73"
          dark
          v-for="(boardgame, id) in boardgames"
          :key="id"
          @click="onclick(boardgame)"
        >
          <v-card-title class="headline">{{boardgame.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    onclick: async function(item) {
      this.$router.push("/boardgame_detail_addbooking/" + item.id);
    }
  },

  data() {
    return {
      boardgames: []
      //   books: [],
      //   presents: [],
      //   materials: []
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
      this.boardgames = data.boardgames;
      //   this.books = data.books;
      //   this.presents = data.presents;
      //   this.materials = data.materials;

      // alert( JSON.stringify(this.boardgames));
      // alert(JSON.stringify(this.boardgames));
      // alert(JSON.stringify(this.books));
      // alert(JSON.stringify(this.presents));
      // alert(JSON.stringify(this.materials));
    } else {
      console.log(response.statusText);
    }
  }
};
</script>
