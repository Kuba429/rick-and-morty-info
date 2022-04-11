<template>
    <router-link :to="'/character/' + character.id" class="card">
        <img :src="character.image" :alt="character.name + ' image'" />
        <div class="data">
            {{ character.name }}
        </div>
    </router-link>
</template>

<script setup lang="ts">
import { Character } from "../Interfaces";
const { character } = defineProps<{ character: Character }>();
</script>

<style lang="scss" scoped>
@import "../variables.scss";
.card {
    // background-color: black;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
    border: 1px solid transparent;
    transition: ease all 50ms;
    color: $light;
    text-decoration: none;
    img {
        width: auto;
        height: auto;
        object-fit: cover;
        object-position: center;
    }
    .data {
        height: 60px;
        padding: 3px;
        background-color: $background2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &:hover {
        border-color: $accent;
    }
}
</style>
