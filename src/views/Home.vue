<template>
  <v-container class="mb-5">
    <v-col cols="12">
      <v-card
        class="mb-5"
        v-for="(item, i) in items"
        :key="'item-' + i"
        @click="routeTo(item.path)"
      >
        <v-img
          :src="item.imgurl"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title v-text="item.name"></v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </v-container>
  
</template>



<script>
export default {
  methods: {
    routeTo(path) {
      this.$router.push(path);
    }
  },
  data() {
    return {
      items: [
        {
          name: "BoardGame",
          imgurl:
            "https://cdn11.bigcommerce.com/s-3zw3s8rnm9/images/stencil/1280x1280/products/894/4622/8816021100207__85533.1561825570.jpg?c=2",
          path: "/boardgame_list"
        },
        {
          name: "Book",
          imgurl:
            "https://www.rd.com/wp-content/uploads/2017/10/This-Is-How-Long-It-Takes-To-Read-The-Whole-Dictionary_509582812-Billion-Photos_FB-e1574101045824.jpg",
          path: "/book_list"
        },
        {
          name: "Activity Material",
          imgurl:
            "https://cdntwrunning.biji.co/800_0b0306c730220749c5dd790ed9b36d60.jpg",
          path: "/material_list"
        },
        {
          name: "Present",
          imgurl:
            "https://d27ucmmhxk51xv.cloudfront.net/media/english/illustration/christmas_present.jpg?version=1.2.1",
          path: "/present_list"
        }
      ]
    };
  }
};
</script>
