<template>
    <div class="container" v-if="props.locations">
        <div v-for="location in props.locations">{{ location.name }}</div>
    </div>
</template>

<script setup lang="ts">
import { Location } from "../Interfaces";

const props = defineProps<{
    locations: Location[];
}>();
</script>

<style scoped></style>
