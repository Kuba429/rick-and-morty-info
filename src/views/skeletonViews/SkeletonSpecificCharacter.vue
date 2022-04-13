<template>
    <div class="container">
        <div class="image" />
        <div class="data">
            <h1>character name</h1>
            <p>Status: <span>character status</span></p>
            <p>Species: <span>character species </span></p>
            <p>Gender: <span> character gender</span></p>
            <br />
            <h2>Appears in episode:</h2>
            <div class="episodes-container">
                <SkeletonEpisodeCard v-for="_ in 8" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import SkeletonEpisodeCard from "../../components/skeletonComponents/SkeletonEpisodeCard.vue";
</script>
<style scoped lang="scss">
@import "../../variables";
.container {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    .image {
        background-color: $background2;
        object-fit: cover;
        height: 300px;
        width: 300px;
    }
}
.data {
    // width: 100%;
    * {
        width: fit-content;
        color: transparent;
        background-color: $background2;
    }
    h1 {
        margin: 0;
    }
}
.episodes-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: $background;
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
