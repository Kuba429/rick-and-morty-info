<template>
    <div v-if="!is404">
        <div class="header">
            <h1>Episodes</h1>
            <input ref="inputRef" type="text" placeholder="Filter" />
        </div>
        <EpisodesContainer :episodes="episodes" />
    </div>
    <Error404 v-else />
</template>
<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { Episode } from "../Interfaces";
import EpisodesContainer from "../components/EpisodesContainer.vue";
import { debounce } from "../utils";
import Error404 from "../components/Error404.vue";
let allEpisodes: Episode[] = [];
const is404 = ref<boolean>(false);
const episodes = ref<Episode[]>([]);
const inputRef = ref<HTMLInputElement>();
onMounted(async () => {
    // I decided to get all episodes at once, no pagination for episodes
    try {
        let response = await axios.get(
            "https://rickandmortyapi.com/api/episode"
        );
        episodes.value = response.data.results;
        allEpisodes = response.data.results;
        while (response.data.info.next) {
            response = await axios.get(response.data.info.next);
            episodes.value.push(...response.data.results);
        }
    } catch (error) {
        is404.value = true;
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
    align-items: flex-end;
    flex-wrap: wrap;
    h1 {
        margin-bottom: 0;
    }
    input {
        font-size: 1rem;
        border: 2px solid $background2;
        border-radius: 2px;
        background-color: $background;
        color: $light;
        &::placeholder {
            color: rgba($color: $light, $alpha: 0.3);
        }
    }
}
</style>
