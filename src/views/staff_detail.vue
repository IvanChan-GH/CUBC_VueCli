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

            <v-dialog v-model="dialog" persistent max-width="600px" ref="formDialog">
                   
                <template v-slot:activator="{ on }">
                    <v-btn color="orange" text v-on="on">Edit</v-btn>
                </template>
               
               
                <v-card>
                  <v-card-title>
                    <span class="headline">Staff Account</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field label="Staff Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field label="Staff ID"></v-text-field>
                        </v-col>
                        
                        <v-col cols="12">
                          <v-text-field label="Email" ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Telephone number"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog=false" >Close</v-btn>
                    <v-btn color="blue darken-1" text @click="update">Update</v-btn>
                  </v-card-actions>
                </v-card>
            </v-dialog>

          </v-card-text>
          
        </v-card> 
      </v-col>
    </v-form>
  </template>
  
  
  
  <script>
  export default {

    props: ["id"],
  methods: {

//     closeFormDialog() {
//     this.$refs.formDialog.close();
//   },

    async update() {
      this.dialog = false;
      var response = await fetch(
        
          "/user/update/" +
          this.$route.params.id,
        {
          method: "POST",
          credentials: "same-origin",
          body: new FormData(document.getElementById("form")) 

        }
      );
      if (response.ok) {
          window.location.reload()
        console.log("ok")
        alert("update successfully")
      } else {
        alert("Unavailable to update");
      }
    }
  },


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
  