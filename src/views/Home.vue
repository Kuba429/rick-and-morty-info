<script lang="ts" setup>
import CharacterSlider from "../components/CharacterSlider.vue";
import EpisodeSlider from "../components/EpisodeSlider.vue";
import LocationSlider from "../components/LocationSlider.vue";
</script>
<template>
    <div class="banner">
        <h1>Rick and Morty</h1>
        <p>Characters, episodes and locations</p>
    </div>
    <div id="home">
        <!-- <img src="../assets/banner.png" alt="" /> -->
        <h2>
            Episodes
            <router-link to="/episodes"
                >More <font-awesome-icon icon="angle-right" />
            </router-link>
        </h2>
        <EpisodeSlider />
        <h2>
            Characters
            <router-link to="/characters"
                >More <font-awesome-icon icon="angle-right"
            /></router-link>
        </h2>
        <CharacterSlider />
        <h2>
            Locations
            <router-link to="/locations"
                >More <font-awesome-icon icon="angle-right"
            /></router-link>
        </h2>
        <LocationSlider />
    </div>
</template>

<style lang="scss" scoped>
@import "../variables.scss";
img {
    width: 50%;
    margin: auto;
    height: auto;
    display: block;
}

.banner {
    background-color: $light;
    color: $background2;
    width: 100%;
    min-height: 30vh;
    font-size: 2rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        text-align: center;
        font-weight: 900;
        padding: 0;
        margin: 0;
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 70%;
        text-align: center;
    }
}
#home {
    h2 {
        display: flex;
        justify-content: space-between;
        a {
            font-size: 60%;
            color: inherit;
            text-decoration: none;
            align-self: flex-end;
            transition: ease 0.1s color;
            font-weight: bolder;
            svg {
                font-size: 80%;
                margin-left: 3px;
            }
            &:hover {
                color: $accent;
            }
        }
    }
}
</style>
