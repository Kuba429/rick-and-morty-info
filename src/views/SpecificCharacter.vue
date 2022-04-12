<template>
    <div v-if="character">
        <div class="container">
            <img :src="character.image" :alt="character.name + ' image'" />
            <div class="data">
                <h1>{{ character.name }}</h1>
                <p>
                    Status: <span>{{ character.status }}</span>
                </p>
                <p>
                    Species: <span>{{ character.species }}</span>
                </p>
                <p>
                    Gender: <span>{{ character.gender }}</span>
                </p>
                <EpisodesContainer :episodes="episodes" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Character, Episode } from "../Interfaces";
import EpisodesContainer from "../components/EpisodesContainer.vue";

const { id } = useRoute().params;

const character = ref<Character>();
const episodes = ref<Episode[]>([]);
onMounted(async () => {
    const response = await axios.get(
        "https://rickandmortyapi.com/api/character/" + id
    );
    character.value = response.data;
    // get all episodes for this character
    const episodesIDs: string[] = [];
    response.data.episode.forEach((episode: string) => {
        episodesIDs.push(episode.split("/")[5]);
    });

    const episodesResponse = await axios.get(
        "https://rickandmortyapi.com/api/episode/" + episodesIDs
    );
    episodes.value = Array.isArray(episodesResponse.data)
        ? episodesResponse.data
        : [episodesResponse.data];
});
</script>

<style scoped lang="scss">
@import "../variables";
.container {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    img {
        object-fit: cover;
    }
}
.data {
    // width: 100%;
    h1 {
        margin: 0;
    }
}
@media (max-width: $small) {
    .container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
