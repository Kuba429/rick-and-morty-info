<template>
    <div class="card">
        <b class="episode text">s01e01</b>
        <p class="name text">some episode name</p>
        <p class="air-date text">air date</p>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../variables.scss";
.card {
    text-decoration: none;
    background-color: $background2;
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 3px;
    display: grid;
    gap: 5px;
    grid-template-columns: auto 1fr;
    .episode {
        grid-row: 1/3;
        margin-right: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
    }
    p {
        padding: 0;
        margin: 0;
    }
    .name {
        grid-row: 1;
        font-size: 1.2rem;
    }
    .air-date {
        grid-row: 2;
        font-size: 0.8rem;
        font-weight: lighter;
    }
    .text {
        color: transparent;
        background-color: $background;
        display: block;
        width: fit-content;
        user-select: none;
        &::selection {
            background-color: $background;
        }
    }
}
</style>
