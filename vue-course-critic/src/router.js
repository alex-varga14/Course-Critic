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
    path: "/courses",
    name: "courses",
    component: () => import("./components/Course"),
    meta: {
      auth: true
  }
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
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

// route array: each route has path: URl where route can be found, name: optional, component: component to load when this route is called
