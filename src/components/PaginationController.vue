<template>
    <div class="pagination-controller">
        <PageLink
            :route="pages.route"
            :page-number="pages.prev"
            icon="angle-left"
        />

        <SpecificPageSelector
            @changePage="(num) => $router.push(pages.route + num)"
            :max-pages="pages.maxPages"
            :current="pages.current"
        />

        <PageLink
            :route="pages.route"
            :page-number="pages.next"
            icon="angle-right"
        />
    </div>
</template>

<script setup lang="ts">
import SpecificPageSelector from "./SpecificPageSelector.vue";
import PageLink from "./PageLink.vue";
const { pages } = defineProps<{
    pages: {
        route: string;
        prev: number;
        current: number;
        next: number;
        maxPages: number;
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
        position: relative;
        padding: 1rem;
        height: 1rem;
        width: 1rem;
        border: 2px solid $background2;
        color: $light;
        text-align: center;
        transition: ease all 70ms;
        display: flex;
        justify-content: center;
        align-items: center;
        &.not-active {
            cursor: not-allowed;
            color: $background2;
            border: 2px solid $background2;
        }
        &:not(.not-active):hover {
            background: $background2;
            border: 2px solid $light;
        }
    }
}
</style>
