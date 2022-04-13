<template>
    <Error404 v-if="is404" />
    <div v-else-if="location">
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
import Error404 from "../components/Error404.vue";
const { id } = useRoute().params;
const location = ref<Location>();
const characters = ref<Character[]>([]);
const is404 = ref(false);
onMounted(async () => {
    const charactersIDs: string[] = [];
    try {
        const response = await axios.get(
            "https://rickandmortyapi.com/api/location/" + id
        );
        location.value = response.data;
        response.data.residents.forEach((resident: string) => {
            charactersIDs.push(resident.split("/")[5]);
        });
    } catch (error) {
        is404.value = true;
    }
    let responseCharacters = await axios.get(
        "https://rickandmortyapi.com/api/character/" + charactersIDs
    );

    if (Array.isArray(responseCharacters.data)) {
        characters.value = responseCharacters.data;
    } else if (responseCharacters.data.info) {
        // when location has all characters as residents, api redirects to default character request with pagination and all
        characters.value = responseCharacters.data.results;
        while (responseCharacters.data.info.next) {
            responseCharacters = await axios.get(
                responseCharacters.data.info.next
            );
            characters.value = characters.value.concat(
                responseCharacters.data.results
            );
        }
    } else {
        characters.value = [responseCharacters.data];
    }
});
</script>

<style scoped lang="scss">
@import "../variables.scss";
</style>
