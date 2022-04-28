import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import PostIdPage from "@/pages/PostIdPage";

const routes = [
   {
      path: '/',
      component: Main
   },
   {
      path: '/posts',
      component: PostPage
   },
   {
      path: '/about',
      component: AboutPage
   },
   {
      path: '/posts/:id',
      component: PostIdPage
   }
]

const router = createRouter({
   routes,
   history: createWebHistory()
})

export default router;