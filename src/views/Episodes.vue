<template>
    <div class="header">
        <h1>Episodes</h1>
        <input ref="inputRef" type="text" placeholder="Filter" />
    </div>
    <EpisodesContainer :episodes="episodes" />
</template>
<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { Episode } from "../Interfaces";
import EpisodesContainer from "../components/EpisodesContainer.vue";
import { debounce } from "../utils";
let allEpisodes: Episode[] = [];
const episodes = ref<Episode[]>([]);
const inputRef = ref<HTMLInputElement>();
onMounted(async () => {
    // I decided to get all episodes at once, no pagination for episodes
    let response = await axios.get("https://rickandmortyapi.com/api/episode");
    episodes.value = response.data.results;
    allEpisodes = response.data.results;
    while (response.data.info.next) {
        response = await axios.get(response.data.info.next);
        episodes.value.push(...response.data.results);
    }
    //set up the filter
    const filterEpisodes = debounce(() => {
        let value = inputRef.value!.value!.toLowerCase();
        if (value == "") {
            episodes.value = allEpisodes;
            return;
        }
        episodes.value = allEpisodes.filter((episode) => {
            return (
                episode.name.toLowerCase().includes(value) ||
                episode.episode.toLowerCase().includes(value) ||
                episode.air_date.toLowerCase().includes(value)
            );
        });
    }, 200);
    inputRef.value?.addEventListener("input", (e: Event) => {
        let value = (<HTMLInputElement>e.target).value.toLowerCase();
        filterEpisodes();
    });
});
</script>
<style lang="scss">
@import "../variables.scss";
.header {
    display: flex;
    justify-content: space-between;
    h1 {
        margin-bottom: 0;
    }
    input {
        font-size: 1rem;
    }
}
</style>
