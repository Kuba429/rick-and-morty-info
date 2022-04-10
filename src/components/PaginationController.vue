<template>
    <div class="pagination-controller">
        <router-link class="block" :to="`/characters/${pages.prev}`">
            <font-awesome-icon icon="angle-left" />
        </router-link>
        <div class="block">{{ pages.current }}</div>
        <router-link class="block" :to="`/characters/${pages.next}`">
            <font-awesome-icon icon="angle-right" />
        </router-link>
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

<style scoped lang="scss">
@import "../variables";
.pagination-controller {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    gap: 5px;
    .block {
        padding: 1rem;
        height: 1rem;
        width: 1rem;
        border: 2px solid $background2;
        color: $light;
        text-align: center;
        transition: ease all 70ms;
        &:hover {
            background: $background2;
            border: 2px solid $light;
        }
    }
}
</style>
