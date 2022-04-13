<template>
    <div class="container" v-if="props.locations">
        <LocationCard
            v-for="location in props.locations"
            :location="location"
        />
    </div>
    <div class="container" v-else>
        <SkeletonLocationCard v-for="_ in 8" />
    </div>
</template>

<script setup lang="ts">
import { Location } from "../Interfaces";
import LocationCard from "./LocationCard.vue";
import SkeletonLocationCard from "./skeletonComponents/SkeletonLocationCard.vue";

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
