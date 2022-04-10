<template>
    <div class="card">
        <b class="episode">{{ episode.episode }}</b>
        <p class="name">{{ episode.name }}</p>
        <p class="air-date">{{ episode.air_date }}</p>
    </div>
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
    background-color: $background2;
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 3px;
    display: grid;
    // grid-template-rows: 1fr 1fr;
    grid-template-columns: auto 1fr;
    // gap: 1rem;
    .episode {
        grid-row: 1/3;
        margin-right: 1rem;
        display: flex;
        font-size: 1.5rem;
        font-weight: bold;
        justify-content: center;
        align-items: center;
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
}
</style>
