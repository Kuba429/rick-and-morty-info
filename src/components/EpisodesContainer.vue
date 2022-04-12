<template>
    <div v-if="episodes.length > 0" class="episode-container">
        <EpisodeCard :episode="episode" v-for="episode in episodes" />
    </div>
</template>

<script setup lang="ts">
import { Episode } from "../Interfaces";
import EpisodeCard from "./EpisodeCard.vue";

const { episodes } = defineProps<{ episodes: Episode[] }>();
</script>

<style lang="scss" scoped>
.episode-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>
