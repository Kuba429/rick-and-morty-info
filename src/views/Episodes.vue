<template>
    <h1>Episodes</h1>
    <EpisodesContainer :episodes="episodes" />
</template>
<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { Episode } from "../Interfaces";
import EpisodesContainer from "../components/EpisodesContainer.vue";
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
</style>
