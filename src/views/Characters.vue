<template>
    <div>
        <h1>Characters</h1>
        <PaginationController :pages="pages" />
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
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { Character } from "../Interfaces";
import CharacterCard from "../components/CharacterCard.vue";
import PaginationController from "../components/PaginationController.vue";

const characters = ref<Character[]>([]);
const currentPage = parseInt(useRoute().params.page as string);
const pages = reactive({
    current: currentPage,
    prev: currentPage > 1 ? currentPage - 1 : 0,
    next: 0,
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
