<template>
    <v-form id="form">
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-img class="white--text align-end" height="200px" :src="user.avatar">
          </v-img>
    <v-card-title>{{user.username}}</v-card-title>
  
          <v-card-text class="text--primary">
            <v-row>
              <v-col cols="4">Staff ID:</v-col>
              <v-col cols="8">{{user.staffID}}</v-col>
            </v-row>
            <v-row>
              <v-col cols="4">Email:</v-col>
              <v-col cols="8" >{{ user.email}}</v-col>
            </v-row>
            <v-row>
              <v-col cols="4">Telephone number:</v-col>
              <v-col cols="8">{{user.tel}}</v-col>
            </v-row>
          </v-card-text>
       <!-- <v-card-actions>
            <v-btn color="orange" text @click.stop="dialog = true">Add Booking</v-btn>
          </v-card-actions> -->
        </v-card> 
  
        <!-- <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Confirm to book?</v-card-title>
  
            <v-card-text></v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
  
              <v-btn color="green darken-1" text @click="dialog = false">NO</v-btn>
  
              <v-btn color="green darken-1" text @click="addbooking">YES</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
      </v-col>
    </v-form>
  </template>
  
  
  
  <script>
  export default {

    data() {
      return {
        user: {},
        // dialog: false
      };
    },
    async mounted() {
      
      var response = await fetch(
        "http://localhost:8080/user/view/" + this.$route.params.id,
        {
          method: "GET",
          credentials: "same-origin"
        }
      );
      
      if (response.ok) {
        var data = await response.json();
        this.user = data.user;
        alert(JSON.stringify(data))
      } 
    }
  };
  </script>
  