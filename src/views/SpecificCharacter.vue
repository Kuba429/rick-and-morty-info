<template>
    <Error404 v-if="is404" />
    <div class="container" v-else-if="character">
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
            <br />
            <h2>Appears in episode:</h2>
            <EpisodesContainer :episodes="episodes" />
        </div>
    </div>
    <SkeletonSpecificCharacter v-else />
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Character, Episode } from "../Interfaces";
import EpisodesContainer from "../components/EpisodesContainer.vue";
import Error404 from "../components/Error404.vue";
import SkeletonSpecificCharacter from "./skeletonViews/SkeletonSpecificCharacter.vue";

const { id } = useRoute().params;
const is404 = ref(false);
const character = ref<Character>();
const episodes = ref<Episode[]>([]);
onMounted(async () => {
    let episodesIDs: string[] = [];
    try {
        const response = await axios.get(
            "https://rickandmortyapi.com/api/character/" + id
        );
        character.value = response.data;
        // get all episodes for this character
        response.data.episode.forEach((episode: string) => {
            episodesIDs.push(episode.split("/")[5]);
        });
    } catch (error) {
        is404.value = true;
    }

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
@media (min-width: $small) {
    .container {
        img {
            position: sticky;
            top: 2rem;
        }
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
