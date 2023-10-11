import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import TasksViewVue from "@/views/TasksView.vue";

const routes = [
  {
    path: "",
    component: LoginView,
  },
  {
    path: "/tasks",
    component: TasksViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
