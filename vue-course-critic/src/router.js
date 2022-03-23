import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: () => import("./components/Home")
  },
  {
    path: "/courselist",
    name: "course-list",
    component: () => import("./components/CoursesList")
  },
  {
    path: "/courses/:id",
    name: "course-details",
    component: () => import("./components/Course")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddCourse")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/Login")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./components/About")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

// route array: each route has path: URl where route can be found, name: optional, component: component to load when this route is called
