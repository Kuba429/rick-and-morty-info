<template>
    <div>
        <h1>Characters</h1>
        <div class="container">
            <CharacterCard
                v-if="characters[0]"
                v-for="character in characters"
                :character="character"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { Character } from "../Interfaces";
import CharacterCard from "../components/CharacterCard.vue";

const page = useRoute().params.page;
const characters = ref<Character[]>([]);
const otherPages = ref({ prev: null, next: null });
onMounted(async () => {
    // get needed data and set the refs
    let response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    characters.value = response.data.results;
    otherPages.value = {
        prev: response.data.info.prev,
        next: response.data.info.next,
    };
});
</script>

<style lang="scss" scoped>
@import "../variables";
.container {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
}

@media (max-width: $medium) {
    .container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: $small) {
    .container {
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: $v-small) {
    .container {
        grid-template-columns: 1fr;
    }
}
</style>
