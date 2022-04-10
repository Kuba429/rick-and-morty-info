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
        <PaginationController :pages="pages" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { Character } from "../Interfaces";
import CharacterCard from "../components/CharacterCard.vue";
import PaginationController from "../components/PaginationController.vue";

const characters = ref<Character[]>([]);
// default to 1 if no page is specified
const currentPage = parseInt(useRoute().params.page as string, 10) || 1;
const pages = reactive({
    route: "/characters/",
    current: currentPage,
    prev: currentPage > 1 ? currentPage - 1 : 0,
    next: 0,
    maxPages: 0,
});

onMounted(async () => {
    // get needed data and set the refs
    let response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
    );
    // set characters
    characters.value = response.data.results;
    // set next page if present
    pages.next = currentPage != response.data.info.pages ? currentPage + 1 : 0;
    pages.maxPages = parseInt(response.data.info.pages);
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
