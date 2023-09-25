import { createRouter, createWebHistory } from "vue-router";

import main from "../Layouts/main.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "download",
      meta: { layout: main },
      children: [
         {
          path: "/",
          name: "download",
          component: () => import("../views/downloadFile.vue"),
        },

      ],
    },
  ],
});

export default router;
