<template>
  <v-container>
    <v-list>
      <v-subheader>My records</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i " @click="onclick(item)">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  methods: {
    onclick: async function(item) {
      // alert(item.nexturl);
      this.$router.push(item.nexturl);
    }
  },
  data: () => ({
    items: [
      { text: "Booked Record", icon: "mdi-clock", nexturl: "/mybookinglist" },
      {
        text: "Borrowed Record",
        icon: "mdi-clock-outline",
        nexturl: "/myborrowlist"
      }
    ]
  })
};
</script>

