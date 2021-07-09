import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/lifecycle",
    name: "lifecycle",
    component: () => import(/* webpackChunkName: "lifecycle" */ '../views/composition/lifecycle.vue')
  },
  {
    path: "/todoList",
    name: "todoList",
    component: () => import(/* webpackChunkName: "todoList" */ '../views/todolist/todoList.vue')
  },
  {
    path: "/test",
    name: "test",
    component: () => import(/* webpackChunkName: "test" */ '../views/composition/test.vue')
  },
  {
    path: "/test2",
    name: "test2",
    component: () => import(/* webpackChunkName: "test2" */ '../views/composition/test2.vue')
  },
  {
    path: "/Provide",
    name: "Provide",
    component: () => import(/* webpackChunkName: "Provide" */ '../views/composition/Provide.vue')
  },
  {
    path: "/setup",
    name: "setup",
    component: () => import(/* webpackChunkName: "setup" */ '../views/composition/setup.vue')
  },
  {
    path: "/teleport",
    name: "teleport",
    component: () => import(/* webpackChunkName: "setup" */ '../views/composition/Teleport.vue')
  }
  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
