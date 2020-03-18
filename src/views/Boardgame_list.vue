<template>
  <v-container>
    <v-row>
      <div>
        <ul>
          <li v-for="(boardgame, id) in boardgames" :key="id"
          >id:{{boardgame.id }}, Boardgame name:{{boardgame.name }}</li>
        </ul>
      </div>
    </v-row>
    <br>
  </v-container>
</template>

<script>
export default {
  methods: {},

  data() {
    return {
      boardgames: [],
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

      // alert( this.boardgames);
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
