<template>
    <div v-if="!is404">
        <h1>Locations</h1>
        <LocationsContainer :locations="locations" />
        <PaginationController :pages="pages" />
    </div>
    <Error404 v-else />
</template>
<script lang="ts" setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import LocationsContainer from "../components/LocationsContainer.vue";
import { Location } from "../Interfaces";
import PaginationController from "../components/PaginationController.vue";
import Error404 from "../components/Error404.vue";

const locations = ref<Location[]>([]);
const currentPage = parseInt(useRoute().params.page as string, 10) || 1;
const is404 = ref(false);
const pages = reactive({
    route: "/locations/",
    current: currentPage,
    prev: currentPage > 1 ? currentPage - 1 : 0,
    next: 0,
    maxPages: 0,
});
onMounted(async () => {
    try {
        let response = await axios.get(
            "https://rickandmortyapi.com/api/location?page=" + currentPage
        );
        locations.value = response.data.results;
        // set next page if present
        pages.next =
            currentPage != response.data.info.pages ? currentPage + 1 : 0;
        pages.maxPages = parseInt(response.data.info.pages);
    } catch (error) {
        is404.value = true;
    }
});
</script>

<style lang="scss">
@import "../variables.scss";
</style>
