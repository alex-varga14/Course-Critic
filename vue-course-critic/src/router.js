import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: () => import("./components/Home")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("./components/AdView")
  },
  {
    path: "/courselist",
    name: "course-list",
    component: () => import("./components/CoursesList")
  },
  {
    path: "/courses/:id",
    name: "courses",
    component: () => import("./components/Course"),
    meta: {
      auth: true
    }
  },
  {
    path: "/coursesAdmin",
    name: "coursesAdmin",
    component: () => import("./components/AdminCourseList"),
  },
  
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddCourse")
  },
  {
    path: "/approve",
    name: "approve",
    component: () => import("./components/ApproveCourse")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/Login")
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("./components/Terms")
  },
  {
    path: "/guidelines",
    name: "guidelines",
    component: () => import("./components/Guidelines")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("./components/Contact")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./components/About")
  },
  {
    path: "/reviewsAdmin/:id",
    name: "reviewsAdmin",
    component: () => import("./components/AdminCourseView")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

// route array: each route has path: URl where route can be found, name: optional, component: component to load when this route is called
