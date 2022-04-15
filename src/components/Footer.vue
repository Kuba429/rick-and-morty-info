<template>
    <footer>
        <p>
            This website was build using
            <a href="https://rickandmortyapi.com">Rick and Morty API</a>
        </p>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../variables.scss";
footer {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: $background2;
    height: 50px;
}
p {
    text-align: center;
    a {
        font-weight: bolder;
        color: rgba($color: $light, $alpha: 0.5);
        color: $light;
        &:hover {
            color: $accent;
        }
    }
}
</style>
