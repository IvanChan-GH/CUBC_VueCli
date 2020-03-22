<template>
    <v-container>
        <v-row dense>
          <v-col cols="12">
          <v-card class="mb-3" color="#385F73" dark v-for="(staff, id) in boardgames" :key="id" @click="onclick(staff)">
          <v-card-title class="headline">{{staff.name }}</v-card-title>
        </v-card>
      </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script>
  // import boardgame_detail from "../views/list/Boardgame_list.vue";
  export default {
    methods: {
      onclick: async function(staff) {
       this.$router.push("/staff_list/" + staff.id);
      }
    },
  
    data() {
      return {
        staff: []
        //   books: [],
        //   presents: [],
        //   materials: []
      };
    },
    async mounted() {
      var response = await fetch("http://localhost:8080/user/staffList", {
        method: "GET",
        credentials: "same-origin"

       
      }); 
      
    
      // console.log(response);
      if (response.ok) {
        var data = await response.json();
        this.staff = data.staff;
        //   this.books = data.books;
        //   this.presents = data.presents;
        //   this.materials = data.materials;
        
        alert( JSON.stringify(this.staff));
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
  