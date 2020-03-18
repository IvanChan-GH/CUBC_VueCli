<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://cubc.org.hk/wp-content/uploads/2016/08/logo_retina_x2.png"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>

    <v-card-text>
      <v-form id="form">
        <v-text-field label="Staff ID  " name="username" type="text" />
        <v-text-field id="password" label="Password" name="password" type="password" />

        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn color="primary" type="button" @click="loginbtn">Login</v-btn>
          </div>
        </v-col>
      </v-form>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  methods: {
    async loginbtn() {
      console.log('login');
      var response = await fetch("/user/login", {
        method: "POST",
        credentials: "same-origin",
        body: new FormData(document.getElementById("form"))
      });
      var data = await response.json();
      if (data.uid) {
        this.$router.push("/home");
      } else {
        // prompt error
      }
      

      // var data;
      // if (response.ok) {
      //     data = await response.json();   // for res.ok() or res.json()
      //     alert(data.uid);
      // } else if (response.status == 401) {
      //     data = await response.text();   // for res.send()
      //     alert(data);
      // } else {
      //     alert(response.statusText);
      // }

      // this.$cookie.set("uid", 12);
      // this.$router.push("/");
      // console.log("uid:" + this.$cookie);
    }
  }
};
</script>