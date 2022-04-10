<template>
    <div v-if="episode">{{ episode.name }}</div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Episode } from "../Interfaces";

const { id } = useRoute().params;
const episode = ref<Episode>();
onMounted(async () => {
    const response = await axios.get(
        "https://rickandmortyapi.com/api/episode/" + id
    );
    episode.value = response.data;
});
</script>

<style scoped></style>
