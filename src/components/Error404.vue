<template>
    <div class="error-404">
        <h1>404</h1>
        <p>Sorry, seems like the page You're trying to visit doesn't exist.</p>
        <router-link to="/">Take me home</router-link>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../variables";
.error-404 {
    width: min(80vh, 800px);
    margin: auto;
    a {
        display: block;
        width: fit-content;
        font-size: 1.4rem;
        padding: 10px;
        background-color: inherit;
        border: 3px solid $background2;
        transition: ease border 0.1s;
        color: $light;
        text-decoration: none;
        &:hover {
            border: 3px solid $accent;
        }
    }
}
</style>
