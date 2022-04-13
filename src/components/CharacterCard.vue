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
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
    border: 3px solid $background2;
    transition: ease all 50ms;
    color: $light;
    text-decoration: none;
    img {
        height: 300px;
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
