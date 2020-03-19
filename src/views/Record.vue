<template>
  <v-container>
    <v-col cols="12" sm="6">
      <v-row>
        <v-text-field label="Borrow History" single-line></v-text-field>
      </v-row>

      <v-row>
        <ul>
          <li v-for="(boardgame, id) in boardgames" :key="id">
            Boardgame id:{{boardgame.id }}
            <br />
            Boardgame name:{{boardgame.name }}
             <br />
            Expiry Date:{{new Date(boardgame.duedate).getDate()+'/'+(new Date(boardgame.duedate).getMonth()+1)+"/"+new Date(boardgame.duedate).getFullYear() }}
          </li>
        </ul>
      </v-row>

      <br />
      <v-row>
        <ul>
          <li v-for="(book, id) in books" :key="id">
            Book id:{{book.id }}
            <br />
            Book name:{{book.name }}
             <br />
            Expiry Date:{{new Date(book.duedate).getDate()+'/'+(new Date(book.duedate).getMonth()+1)+"/"+new Date(book.duedate).getFullYear() }}
          </li>
        </ul>
      </v-row>

      <br />
      <v-row>
        <ul>
          <li v-for="(mat, id) in materials" :key="id">
            Activity Material id:{{mat.id }}
            <br />
            Activity Material name:{{mat.name }}
            <br />
            Expiry Date:{{new Date(mat.duedate).getDate()+'/'+(new Date(mat.duedate).getMonth()+1)+"/"+new Date(mat.duedate).getFullYear() }}
          </li>
        </ul>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  methods: {},

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
        "/borrowboardgame",
      {
        method: "GET",
        credentials: "same-origin"
      }
    );
    if (response.ok) {
      var data = await response.json();
      this.boardgames = data.borrowboardgame;
      // alert(JSON.stringify(data.borrowboardgame));
    } else {
      console.log(response.statusText);
    }

    response = await fetch(
      "http://localhost:8080/user/" + this.$cookie.get("uid") + "/borrowbook",
      {
        method: "GET",
        credentials: "same-origin"
      }
    );
    if (response.ok) {
      data = await response.json();
      this.books = data.borrowbook;
    } else {
      console.log(response.statusText);
    }

    response = await fetch(
      "http://localhost:8080/user/" +
        this.$cookie.get("uid") +
        "/borrowmaterial",
      {
        method: "GET",
        credentials: "same-origin"
      }
    );
    if (response.ok) {
      data = await response.json();
      this.materials = data.borrowmaterial;
    } else {
      console.log(response.statusText);
    }
  }
};
</script>
