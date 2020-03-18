<template>
  <v-card class="mx-auto" min-width="600" tile>
    <v-list-item v-for="item in items" :key="item.title"  @click="onclick(item)">
      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-img :src="item.imgurl" aspect-ratio="2"></v-img>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>



<script>
export default {
  methods: {
     onclick: function(args) {  
       alert(JSON.stringify(args.name));
       this.$router.push("/boardgame_list");
     }
  },

  data() {
    return {
      items: [
        {
          name: "BoardGame",
          imgurl:
            "https://cdn11.bigcommerce.com/s-3zw3s8rnm9/images/stencil/1280x1280/products/894/4622/8816021100207__85533.1561825570.jpg?c=2"
        },
        {
          name: "Book",
          imgurl:
            "https://www.rd.com/wp-content/uploads/2017/10/This-Is-How-Long-It-Takes-To-Read-The-Whole-Dictionary_509582812-Billion-Photos_FB-e1574101045824.jpg"
        },
        {
          name: "Activity Material",
          imgurl:
            "https://cdn11.bigcommerce.com/s-3zw3s8rnm9/images/stencil/1280x1280/products/894/4622/8816021100207__85533.1561825570.jpg?c=2"
        },
        {
          name: "Present",
          imgurl:
            "https://d27ucmmhxk51xv.cloudfront.net/media/english/illustration/christmas_present.jpg?version=1.2.1"
        }
      ],
    };
  }
  
  
};
</script>
