<template>
    <div v-if="isError">404</div>
    <div v-else-if="locations.length > 0" class="slider location-slider">
        <LocationCard v-for="location in locations" :location="location" />
    </div>
    <div v-else class="slider location-slider">
        <SkeletonLocationCard
            v-for="location in locations"
            :location="location"
        />
    </div>
</template>

<script setup lang="ts">
import Location from "../Interfaces.ts";
import { ref, onMounted } from "vue";
import axios from "axios";
import LocationCard from "./LocationCard.vue";
import SkeletonLocationCard from "./skeletonComponents/SkeletonLocationCard.vue";
const locations = ref<Location[]>([]);
const isError = ref(false);
onMounted(async () => {
    try {
        const response = await axios.get(
            "https://rickandmortyapi.com/api/location/1,2,3,4,5,6,7,8,9,10"
        );
        locations.value = response.data;
    } catch (err) {
        isError.value = true;
    }
});
</script>
<style scoped lang="scss">
.slider {
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    .card {
        white-space: nowrap;
    }
}
</style>
