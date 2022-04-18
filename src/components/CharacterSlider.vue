<template>
    <div v-if="isError">404</div>
    <div v-else-if="characters?.length > 0" class="character-slider slider">
        <CharacterCard v-for="character in characters" :character="character" />
    </div>
    <div v-else class="character-slider slider">
        <SkeletonCharacterCard v-for="_ in 10" />
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { Character } from "../Interfaces";
import CharacterCard from "./CharacterCard.vue";
import SkeletonCharacterCard from "./skeletonComponents/SkeletonCharacterCard.vue";
const characters = ref<Character[]>();
const isError = ref<boolean>(false);
onMounted(async () => {
    try {
        const response = await axios.get(
            "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9"
        );
        characters.value = response.data;
    } catch (err) {
        isError.value = true;
    }
});
</script>
<style scoped lang="scss">
.slider {
    display: flex;
    gap: 0.5rem;
    overflow-x: scroll;
    width: 100%;
    .card {
        min-width: 300px;
    }
}
</style>
