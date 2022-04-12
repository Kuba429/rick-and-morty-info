<template>
    <router-link class="card" :to="'/location/' + location.id">
        <h2>{{ location.name }}</h2>
        <!-- <p>{{ location.type }}</p> -->
    </router-link>
</template>

<script setup lang="ts">
import { Location } from "../Interfaces";

const { location } = defineProps<{ location: Location }>();
</script>

<style scoped lang="scss">
@import "../variables.scss";
.card {
    padding: 1rem;
    background-color: $background2;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    color: $light;
    text-decoration: none;
}
</style>
