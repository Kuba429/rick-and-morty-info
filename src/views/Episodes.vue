<template>
    <h1>Episodes</h1>
    <div v-if="episodes.length > 1" class="container">
        <div class="chosen-episode">
            <router-view></router-view>
        </div>
        <div class="episode-list">
            <EpisodeCard :episode="episode" v-for="episode in episodes" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { Episode } from "../Interfaces";
import EpisodeCard from "../components/EpisodeCard.vue";
const episodes = ref<Episode[]>([]);
onMounted(async () => {
    // I decided to get all episodes at once, no pagination for episodes
    let response = await axios.get("https://rickandmortyapi.com/api/episode");
    episodes.value = response.data.results;
    while (response.data.info.next) {
        response = await axios.get(response.data.info.next);
        episodes.value.push(...response.data.results);
    }
});
</script>
<style lang="scss">
@import "../variables.scss";
.container {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    // height: 100vh;
    .episode-list {
        grid-column: 1;
        grid-row-start: 1;
        overflow: scroll;
        height: 80vh;
        .router-link-active {
            background-color: rgba($color: $background2, $alpha: 0.4);
            b {
                color: $accent;
            }
        }
    }
    .chosen-episode {
        grid-row-start: 1;
        grid-column: 2;
        height: 100vh;
    }
}
</style>
