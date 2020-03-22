import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from  '../views/Login.vue';
import Footer from '../views/Footer.vue';
import boardgame_list from '../views/Boardgame_list.vue';
import book_list from '../views/Book_list.vue';
import material_list from '../views/Material_list.vue'
import present_list from '../views/Present_list.vue'
import boardgame_detail from '../views/Boardgame_detail.vue';
import record from '../views/Record.vue';
import adminFooter from '../views/adminFooter.vue';
import staff_list from '../views/staff_list.vue';

Vue.use (VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    components: {
      default: Login,
    },
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: Home,
      footer: Footer,
    },
  },
  {
    path: '/adminhome',
    name: 'Home',
    components: {
      default: Home,
      footer: adminFooter,
    },
  },
  {
    path: '/boardgame_list',
    name: 'boardgame_list',
    components: {
      default: boardgame_list,
      footer: Footer,
    },
  },
  {
    path: '/book_list',
    name: 'book_list',
    components: {
      default: book_list,
      footer: Footer,
    },
  },
  {
    path: '/material_list',
    name: 'material_list',
    components: {
      default: material_list,
      footer: Footer,
    },
  },
  {
    path: '/present_list',
    name: 'present_list',
    components: {
      default: present_list,
      footer: Footer,
    },
  },
  {
    path: '/boardgame_detail/:id',
    props: true,
    name: 'boardgame_detail',
    components: {
      default: boardgame_detail,
      footer: Footer,
    },
  },
  {
    path: '/record',
    name: 'Record',
    components: {
      default: record,
      footer: Footer,
    },
  },
  {
    path: '/staff_list',
    name: 'staff_list',
    components: {
      default: staff_list,
      footer: adminFooter,
    },
  },
];

const router = new VueRouter ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
