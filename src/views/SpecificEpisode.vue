<template>
    <Error404 v-if="is404" />
    <div v-else-if="episode">
        <h1>Episode {{ episode.id }}</h1>
        <p>
            Name: <b>{{ episode.name }}</b>
        </p>
        <p>
            Season, Episode: <b>{{ episode.episode }}</b>
        </p>
        <p>
            Aired on: <b>{{ episode.air_date }}</b>
        </p>

        <h2>Characters appearing in episode:</h2>
        <CharacterContainer :characters="characters" />
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Character, Episode } from "../Interfaces";
import CharacterContainer from "../components/CharacterContainer.vue";
import Error404 from "../components/Error404.vue";

const { id } = useRoute().params;
const episode = ref<Episode>();
const characters = ref<Character[]>([]);
const is404 = ref(false);
onMounted(async () => {
    const charactersIDs: string[] = [];
    try {
        // fetch episode data
        const responseEpisodes = await axios.get(
            "https://rickandmortyapi.com/api/episode/" + id
        );
        episode.value = responseEpisodes.data;
        // get characters appearing in episode
        responseEpisodes.data.characters.forEach((character: string) => {
            charactersIDs.push(character.split("/")[5]);
        });
    } catch (error) {
        is404.value = true;
    }
    // fetch characters appearing in episode
    const responseCharacters = await axios.get(
        "https://rickandmortyapi.com/api/character/" + charactersIDs.join(",")
    );
    characters.value = responseCharacters.data;
});
</script>

<style scoped lang="scss">
h1 {
    margin-top: 0;
}
</style>
