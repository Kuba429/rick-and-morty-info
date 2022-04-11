<template>
    <div v-if="episode">
        <h2>{{ episode.name }}</h2>
        <h3>{{ episode.episode }}</h3>
        <p>Aired on: {{ episode.air_date }}</p>
        <CharacterContainer :characters="characters" />
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Character, Episode } from "../Interfaces";
import CharacterContainer from "../components/CharacterContainer.vue";

const { id } = useRoute().params;
const episode = ref<Episode>();
const characters = ref<Character[]>([]);
onMounted(async () => {
    // fetch episode data
    const responseEpisodes = await axios.get(
        "https://rickandmortyapi.com/api/episode/" + id
    );
    episode.value = responseEpisodes.data;

    // fetch characters appearing in episode
    const charactersIDs: string[] = [];
    responseEpisodes.data.characters.forEach((character: string) => {
        charactersIDs.push(character.split("/")[5]);
    });
    const responseCharacters = await axios.get(
        "https://rickandmortyapi.com/api/character/" + charactersIDs.join(",")
    );
    characters.value = responseCharacters.data;
});
</script>

<style scoped lang="scss"></style>
