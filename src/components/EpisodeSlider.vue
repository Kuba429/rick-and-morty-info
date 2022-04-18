<template>
    <div v-if="isError">404</div>
    <div v-else-if="episodes?.length > 0" class="slider episode-slider">
        <EpisodeCard v-for="episode in episodes" :episode="episode" />
    </div>
    <div v-else class="slider episode-slider">
        <SkeletonEpisodeCard v-for="_ in 10" />
    </div>
</template>

<script setup lang="ts">
import { Episode } from "../Interfaces";
import EpisodeCard from "./EpisodeCard.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import SkeletonEpisodeCard from "./skeletonComponents/SkeletonEpisodeCard.vue";
const episodes = ref<Episode[]>();
const isError = ref(false);
onMounted(async () => {
    try {
        const response = await axios.get(
            "https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9"
        );
        console.log(response.data);
        episodes.value = response.data;
    } catch (err) {
        isError.value = true;
    }
});
</script>

<style scoped lang="scss">
.slider {
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    .card {
        white-space: nowrap;
    }
}
</style>
