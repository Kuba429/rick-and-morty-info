<template>
    <nav>
        <router-link to="/">Home</router-link>
        <div class="other-links">
            <router-link to="/characters">Characters</router-link>
            <router-link to="/locations">Locations</router-link>
            <router-link to="/episodes">Episodes</router-link>
        </div>
    </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../variables.scss";
nav {
    position: sticky;
    padding: 1rem 2rem;
    background-color: $background2;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.other-links {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}
a {
    color: $light;
    text-decoration: none;
    padding: 5px 0;
}
.router-link-active {
    position: relative;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: $accent;
        bottom: 0px;
    }
}
</style>
