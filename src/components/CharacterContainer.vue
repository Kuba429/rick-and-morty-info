<template>
    <div class="container" v-if="props.characters[0]">
        <CharacterCard
            v-for="character in props.characters"
            :character="character"
        />
    </div>
    <div v-else class="container">
        <SkeletonCharacterCard v-for="i in 8" />
    </div>
</template>

<script setup lang="ts">
import { Character } from "../Interfaces";
import CharacterCard from "./CharacterCard.vue";
import SkeletonCharacterCard from "./skeletonComponents/SkeletonCharacterCard.vue";

const props = defineProps<{
    characters: Character[];
}>();
</script>

<style scoped lang="scss">
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
