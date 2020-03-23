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
            name: "Item create",
            imgurl:
              "https://cw1.tw/CW/images/article/201707/article-597aed732605f.jpg",
            path: "/item_create"
          },
          {
            name: "Item delete",
            imgurl:
              "https://www.phocuswire.com/uploadedImages/Articles/Opinion/2019/September/broken-marketing-funnel.jpg?origwidth=800&origheight=400&origmode=crop&Anchor=MiddleCenter&width=600&height=300&scale=both&mode=crop",
            path: "/"
          },
          {
            name: "Item edit",
            imgurl:
              "https://cdn.searchenginejournal.com/wp-content/uploads/2016/07/update-your-content.jpg",
            path: "/"
          },
          {
            name: "Staff create",
            imgurl:
              "https://www.tourismtribe.com/wp-content/uploads/image00-3-768x576.png",
            path: "/"
          },
          {
            name: "Staff delete",
            imgurl:
              "https://www.tourismtribe.com/wp-content/uploads/image00-3-768x576.png",
            path: "/"
          },
          {
            name: "Staff edit",
            imgurl:
              "https://www.tourismtribe.com/wp-content/uploads/image00-3-768x576.png",
            path: "/staff_list/"
          }
        ]
      };
    }
  };
  </script>
  