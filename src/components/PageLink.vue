<template>
    <!-- display link if the page it's leading to isn't 0, otherwise show div mimicing the link -->
    <router-link v-if="pageNumber > 0" class="block" :to="route + pageNumber">
        <font-awesome-icon :icon="icon" />
    </router-link>
    <div v-else class="block not-active">
        <font-awesome-icon :icon="icon" />
    </div>
</template>

<script setup lang="ts">
const { pageNumber, route, icon } = defineProps<{
    pageNumber: number;
    route: string;
    icon: string;
}>();
</script>

<style scoped></style>
