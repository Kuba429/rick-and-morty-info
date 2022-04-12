<template>
    <div v-if="location">
        <h1>{{ location.name }}</h1>
        <p>
            Type: <span>{{ location.type }}</span>
        </p>
        <p>
            Dimension: <span>{{ location.dimension }}</span>
        </p>
        <h3>Residents:</h3>
        <CharacterContainer :characters="characters" />
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Character, Location } from "../Interfaces";
import CharacterContainer from "../components/CharacterContainer.vue";
const { id } = useRoute().params;
const location = ref<Location>();
const characters = ref<Character[]>([]);
onMounted(async () => {
    const response = await axios.get(
        "https://rickandmortyapi.com/api/location/" + id
    );
    location.value = response.data;
    const charactersIDs = response.data.residents.map(
        (resident: string) => resident.split("/")[5]
    );
    const responseCharacters = await axios.get(
        "https://rickandmortyapi.com/api/character/" + charactersIDs
    );
    characters.value = Array.isArray(responseCharacters.data)
        ? responseCharacters.data
        : [responseCharacters.data];
});
</script>

<style scoped lang="scss">
@import "../variables.scss";
</style>
