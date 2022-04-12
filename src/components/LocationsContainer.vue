<template>
    <div class="container" v-if="props.locations">
        <LocationCard
            v-for="location in props.locations"
            :location="location"
        />
    </div>
</template>

<script setup lang="ts">
import { Location } from "../Interfaces";
import LocationCard from "./LocationCard.vue";

const props = defineProps<{
    locations: Location[];
}>();
</script>

<style scoped lang="scss">
@import "../variables.scss";
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
@media (max-width: $v-small) {
    .container {
        grid-template-columns: 1fr;
    }
}
</style>
