<template>
    <v-form id="form">
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-img class="white--text align-end" height="200px" :src="boardgame.avatar">
            <v-card-title>{{boardgame.name}}</v-card-title>
          </v-img>
  
          <v-card-subtitle class="pb-0">{{boardgame.type}}</v-card-subtitle>
  
          <v-card-text class="text--primary">
            <v-row>
              <v-col cols="4">Location:</v-col>
              <v-col cols="8">{{boardgame.location}}</v-col>
            </v-row>
            <v-row>
              <v-col cols="4">Status:</v-col>
              <v-col cols="8">{{ boardgame.isbooked ? 'Unavailable' : 'available' }}</v-col>
            </v-row>
            <v-row>
              <v-col cols="4">Remark:</v-col>
              <v-col cols="8">{{boardgame.remark}}</v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text @click.stop="dialog = true">Add Booking</v-btn>  <!--booking-->
            <v-btn color="orange" text @click.stop="dialog2 = true">Edit Item</v-btn>    <!--update-->
          </v-card-actions>       
          
        </v-card>
  
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">confirm to book?</v-card-title>
  
            <v-card-text></v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
  
              <v-btn color="green darken-1" text @click="dialog = false">NO</v-btn>
  
              <v-btn color="green darken-1" text @click="addbooking">YES</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  
        <v-dialog v-model="dialog2" max-width="500">
          <v-card>
            <v-card-title>
              <span class="headline">Edit Item</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
  
                  <v-col cols="12">
                    <v-text-field label="Boardgame Name*" required>{{boardgame.name}}</v-text-field>
                  </v-col>
  
                  <v-col cols="12">
                    <v-select
                      :items="['Card Game', 'City Building', 'Chess Game', 'Role Played Game']"
                      label="Boardgame Type*"
                      required
                    >{{boardgame.type}}</v-select>
                  </v-col>
  
                  <v-col cols="12">
                    <v-text-field 
                      label="Location*" 
                      required hint="Please type the detail address of the boardgame here"
                      >{{boardgame.location}}</v-text-field>
                  </v-col>
  
                  <v-col cols="12">
                    <v-text-field label="#Avatar#"></v-text-field>  <!--not done-->
                  </v-col>
                  
                  <v-col cols="12">
                    <v-text-field 
                      label="Remark" 
                      hint="remark important attention here" 
                      persistent-hint
                      >{{boardgame.remark}}</v-text-field>
                  </v-col>
  
                </v-row>
              </v-container>
              <small>* indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog2 = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog2 = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  
      </v-col>
    </v-form>
  </template>
  
  
  
  <script>
  export default {
    props: ["id"],
    methods: {
      async addbooking() {
        this.dialog = false;
        var response = await fetch(
          "/user/" +
            this.$cookie.get("uid") +
            "/addbooking/boardgame/" +
            this.$route.params.id,
          {
            method: "POST",
            credentials: "same-origin",
            body: new FormData(document.getElementById("form"))
          }
        );
        if (response.ok) {
          console.log("ok")
        } else {
          alert("Unavailable to book");
        }
      },
  
      async boardgame_update() {
        this.dialog = false;
        var response = await fetch(
          "/boardgame/" +
          this.$cookie.get("uid") +
          "/edit/",
          {
            method: "GET",
            credentials: "same-origin",
            body: new FormData(document.getElementById("form"))
          }
        );
        if(response.ok) {
          console.log("ok")
        } else {
          alert("Unavailable to edit");
        }
      }
    },
  
    data() {
      return {
        boardgame: {},
        dialog: false,      //this for booking
        dialog2: false      //this for update
      };
    },
    async mounted() {
      var response = await fetch(
        "http://localhost:8080/boardgame/view/" + this.$route.params.id,
        {
          method: "GET",
          credentials: "same-origin"
        }
      );
      
      if (response.ok) {
        var data = await response.json();
        this.boardgame = data.boardgames;
        alert(JSON.stringify(this.boardgame));
      } else {
        alert("boardgame not found");
      }
    }
  };
  </script>
  