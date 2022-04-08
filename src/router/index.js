import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import SettingsPage from "@/pages/SettingsPage";

const routes = [
  {
    path: "/main",
    component: MainPage
  },
  {
    path: "/settings",
    component: SettingsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
