import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAngleLeft, faAngleRight);

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
            children: [
                {
                    path: ":id",
                    name: "SpecificEpisode",
                    component: () => import("./views/SpecificEpisode.vue"),
                },
            ],
        },
    ],
});
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount("#app");
