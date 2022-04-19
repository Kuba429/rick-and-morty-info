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
    transition: ease 0.1s opacity;
    &:hover {
        opacity: 70%;
    }
    // underline
    position: relative;
    &::before {
        content: "";
        position: absolute;
        height: 3px;
        background: $accent;
        bottom: 0px;
        transition: ease 0.3s all;
        width: 0;
    }
}
.router-link-active {
    &::before {
        width: 100%;
    }
}
</style>
