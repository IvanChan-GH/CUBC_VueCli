<template>
  <v-app style="background: url(https://i.pinimg.com/originals/e3/03/64/e3036456ed22a53d696853f0347cbe3f.jpg)">

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
