import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home ",
            component: () => import("./views/Home.vue"),
        },
        {
            path: "/characters/",
            name: "Characters",
            component: () => import("./views/Characters.vue"),
            children: [
                {
                    path: ":page",
                    name: "CharactersPage",
                    component: () => import("./views/Characters.vue"),
                },
            ],
        },
        {
            path: "/locations",
            name: "Locations",
            component: () => import("./views/Locations.vue"),
        },
        {
            path: "/episodes",
            name: "Episodes",
            component: () => import("./views/Episodes.vue"),
        },
    ],
});

createApp(App).use(router).mount("#app");
