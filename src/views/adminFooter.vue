<template>
    <v-bottom-navigation fixed v-model="bottomNav">
      <v-btn to="/adminhome" value="home">
        <span>AdminHome</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/manage" value="nearby">
        <span>Manage</span>
        <v-icon>mdi-account-multiple</v-icon>
      </v-btn>

      <v-btn to="/record" value="record">
        <span>History</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn to="/" value="nearby">
        <span>Scan</span>
        <v-icon>mdi-overscan</v-icon>
      </v-btn>

       <v-btn to="/" value="nearby">
        <span>Search</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
     
      <v-btn to="/" >
        <span>Logout</span>
        <v-icon>mdi-subdirectory-arrow-left</v-icon>
      </v-btn>

    </v-bottom-navigation>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    bottomNav: "recent"
  })
}
</script>