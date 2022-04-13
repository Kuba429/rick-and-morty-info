<template>
    <div class="card">
        <div class="img-placeholder"></div>
        <div class="data">
            <!-- some placeholder text ;) -->
            <span class="text">not</span>
            <span class="text">an</span>
            <span class="text">easter</span>
            <span class="text">egg</span>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../variables.scss";
.card {
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
    border: 4px solid $background2;
    .img-placeholder {
        height: 300px;
        visibility: hidden;
    }
    .data {
        height: 60px;
        padding: 3px;
        background-color: $background2;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .text {
            color: transparent;
            background-color: $background;
        }
    }
}
</style>
