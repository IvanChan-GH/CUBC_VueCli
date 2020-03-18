<template>
    <v-bottom-navigation fixed v-model="bottomNav">
      <v-btn to="/home" value="home">
        <span>Home</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="record">
        <span>My Record</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn to="/" value="nearby">
        <span>Scan</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

       <v-btn to="/" value="nearby">
        <span>Search</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn to="/" >
        <span>Logout</span>
        <v-icon>mdi-map-marker</v-icon>
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