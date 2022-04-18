<script lang="ts" setup>
import CharacterSlider from "../components/CharacterSlider.vue";
import EpisodeSlider from "../components/EpisodeSlider.vue";
</script>
<template>
    <div id="home">
        <img src="../assets/banner.png" alt="" />
        <h1>Home</h1>
        <h2>Characters</h2>
        <CharacterSlider />
        <h2>Episodes</h2>
        <EpisodeSlider />
    </div>
</template>

<style lang="scss" scoped>
@import "../variables.scss";
div {
    padding: 0;
}
img {
    width: 50%;
    margin: auto;
    height: auto;
    display: block;
}
</style>
