<template>
    <footer>
        <p>
            All data on this website was provided by
            <a
                class="api-link"
                href="https://rickandmortyapi.com"
                target="blank"
            >
                Rick and Morty API
            </a>
        </p>
        <a
            class="github-link"
            href="https://github.com/Kuba429/rick-and-morty-info"
            target="blank"
        >
            <font-awesome-icon :icon="['fab', 'github']" />
        </a>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../variables.scss";
footer {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: $background2;
    .github-link {
        font-size: 2rem;
        color: $light;
        &:hover {
            color: $accent;
        }
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
}
a {
    transition: ease color 0.2s;
}
</style>
