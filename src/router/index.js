import { createRouter, createWebHistory } from "vue-router";

import main from "../Layouts/main.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: { layout: main },
      children: [
        {
          path: "/",
          name: "form",
          component: () => import("../views/form.vue"),
        },
        {
          path: "/form",
          name: "formT",
          component: () => import("../views/FormTest.vue"),
        },
      ],
    },
  ],
});

export default router;
