<template>
    <div class="pagination-controller">
        <router-link :to="`/characters/${pages.prev}`">{{
            pages.prev
        }}</router-link>
        <router-link :to="`/characters/${pages.next}`">{{
            pages.next
        }}</router-link>
    </div>
</template>

<script setup lang="ts">
const { pages } = defineProps<{
    pages: {
        prev: number;
        current: number;
        next: number;
    };
}>();
</script>

<style scoped lang="scss"></style>
