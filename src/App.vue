<template>
  <v-app>

    <router-view name="default"></router-view>

    <router-view name="footer"></router-view>
    
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // var uid = this.$cookie.get("uid", 12);
    // console.log(uid);
    // if (uid == null) {
    //   if (this.$route.path !== '/login') {
    //       this.$router.push('/login');
    //   }
    // } else {
    //   if (this.$route.path !== '/') {
    //       this.$router.push('/');
    //   }
    // }
  },
};
</script>
