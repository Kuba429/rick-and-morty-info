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
    background-color: $background;
    color: $light;
}
#main-container {
    max-width: 100%;
    & > div {
        padding: 2rem;
    }
    h1 {
        margin-top: 0;
    }
}
</style>
