import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
// import adminFooter from "../views/adminFooter.vue";
import Footer from "../views/Footer.vue";
import boardgame_list from "../views/Boardgame_list.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    components: {
      default: Login
    },
  },
  {
    path: "/home",
    name: "Home",
    components: {
      default: Home,
      footer: Footer,
    }
  },
  {
    path: "/boardgame_list",
    name: "Home",
    components: {
      default: boardgame_list,
      footer: Footer,
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
