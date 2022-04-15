<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <Navbar />
    <div id="main-container">
        <!-- :key forces rerender on route change -->
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<style lang="scss">
@import "./variables.scss";
body {
    margin: 0;
    font-family: "Lato", sans-serif;
    background-color: $background2;
    color: $light;
}
#main-container {
    min-height: 90vh;
    max-width: 100%;
    background-color: $background;
    & > div {
        padding: 2rem;
    }
    h1 {
        margin-top: 0;
    }
}
</style>
