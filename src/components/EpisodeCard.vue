<template>
    <router-link :to="'/episode/' + episode.id" class="card">
        <b class="episode">{{ episode.episode }}</b>
        <p class="name">{{ episode.name }}</p>
        <p class="air-date">{{ episode.air_date }}</p>
    </router-link>
</template>

<script setup lang="ts">
import { Episode } from "../Interfaces";
const props = defineProps<{
    episode: Episode;
}>();
</script>

<style scoped lang="scss">
@import "../variables.scss";
.card {
    text-decoration: none;
    color: inherit;
    background-color: $background2;
    transition: ease background 85ms;
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 3px;
    display: grid;
    grid-template-columns: auto 1fr;
    .episode {
        text-decoration: none;
        color: inherit;
        grid-row: 1/3;
        margin-right: 1rem;
        display: flex;
        font-size: 1.5rem;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        transition: ease color 80ms;
    }
    p {
        padding: 0;
        margin: 0;
    }
    .name {
        grid-row: 1;
        font-size: 1.2rem;
    }
    .air-date {
        grid-row: 2;
        font-size: 0.8rem;
        font-weight: lighter;
    }
    &:hover {
        background-color: rgba($color: $background2, $alpha: 0.5);
        color: rgba($color: $light, $alpha: 0.7);
    }
}
</style>
