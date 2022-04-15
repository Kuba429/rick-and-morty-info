import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAngleLeft, faAngleRight, faGithub);
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
            path: "/character/:id",
            name: "Character",
            component: () => import("./views/SpecificCharacter.vue"),
        },
        {
            path: "/locations",
            name: "Locations",
            component: () => import("./views/Locations.vue"),
            children: [
                {
                    path: ":page",
                    name: "LocationsPage",
                    component: () => import("./views/Locations.vue"),
                },
            ],
        },
        {
            path: "/location/:id",
            name: "Location",
            component: () => import("./views/SpecificLocation.vue"),
        },
        {
            path: "/episodes",
            name: "Episodes",
            component: () => import("./views/Episodes.vue"),
        },
        {
            path: "/episode/:id",
            name: "SpecificEpisode",
            component: () => import("./views/SpecificEpisode.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () => import("./components/Error404.vue"),
        },
    ],
});
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount("#app");
