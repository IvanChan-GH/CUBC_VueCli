import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from  '../views/Login.vue';
import Footer from '../views/Footer.vue';
import boardgame_list from '../views/Boardgame_list.vue';
import book_list from '../views/Book_list.vue';
import material_list from '../views/Material_list.vue'
import present_list from '../views/Present_list.vue'
import boardgame_detail_addbooking from '../views/Boardgame_detail_addbooking';
import boardgame_detail_removebooking from '../views/Boardgame_detail_removebooking';
import myrecord from '../views/MyRecord.vue';
import myborrowlist from '../views/Myborrowlist.vue';
import mybookinglist from '../views/Mybookinglist.vue';
import adminFooter from '../views/adminFooter.vue';
import staff_list from '../views/staff_list.vue';
import staff_detail from '../views/staff_detail.vue';
import manage from '../views/Manage.vue';
import item_create from '../views/Item_create.vue';
import boardgame_create from '../views/Boardgame_create.vue';


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
    name: 'adminhome',
    components: {
      default: Home,
      footer: adminFooter,
    },
  },
  {
    path: '/manage',
    name: 'manage',
    components: {
      default: manage,
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
    path: '/boardgame_detail_addbooking/:id',
    props: true,
    name: 'boardgame_detail_addbooking',
    components: {
      default: boardgame_detail_addbooking,
      footer: Footer,
    },
  },
  {
    path: '/boardgame_detail_removebooking/:id',
    props: true,
    name: 'boardgame_detail_removebooking',
    components: {
      default: boardgame_detail_removebooking,
      footer: Footer,
    },
  },
  {
    path: '/myrecord',
    name: 'myrecord',
    components: {
      default: myrecord,
      footer: Footer,
    },
  },
  {
    path: '/myborrowlist',
    name: 'myborrowlist',
    components: {
      default: myborrowlist,
      footer: Footer,
    },
  },
  {
    path: '/mybookinglist',
    name: 'mybookinglist',
    components: {
      default: mybookinglist,
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
  {
    path: '/staffdetail/:id',
    name: 'staffdetail',
    components: {
      default: staff_detail,
      footer: adminFooter,
    },
  },
  {
    path: '/item_create',
    name: 'item_create',
    components: {
      default: item_create,
      footer: adminFooter,
    },
  },
  {
    path: '/boardgame_create',
    name: 'boardgame_create',
    components: {
      default: boardgame_create,
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
