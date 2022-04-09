<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <Navbar />
    <div id="main-container">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@import "./variables.scss";
body {
    margin: 0;
    font-family: "Lato", sans-serif;
    background-color: $background;
    color: $light;
}
#main-container {
    max-width: 100%;
    padding: 2rem;
    // display: flex;
    // flex-direction: column;
}
</style>
