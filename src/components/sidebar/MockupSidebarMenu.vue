<script setup lang="ts">
import { useToggleStore } from '../../store/toggles';
const store = useToggleStore();
const toggleSubmenu = (state:string, toggle: boolean) => {
    store.setProduct(state)
}
</script>
<template>
    <section class="sidebar__section">
        <button class="sidebar__item" @mouseenter="toggleSubmenu('spectacles', true)">SPECTACLES</button>
        <button class="sidebar__item" @mouseenter="toggleSubmenu('sunglasses', true)">SUNGLASSES</button>
        <button class="sidebar__item">HOME TRY ON</button>
        <button class="sidebar__item">PAIR FOR PAIR</button>
        <div class="flex_sizer"></div>
    </section>
</template>
<style scoped>
.sidebar__section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1 1 auto;
    background-color: white;
    position:relative;
    z-index:2;
}
.flex_sizer {
    flex:2 1 auto;
    height: calc(100vh);
    border: none;
    border-right: 1px black solid;
}
.sidebar__item {
    flex: 1 1 auto;
    background: none;
    border: none;
    border-bottom: 1px black solid;
    border-right: 1px black solid;
    cursor: pointer;
    height: calc(100vh * 0.2);
    text-align: left;
}

.sidebar__section ul {
    flex: 2 1 auto;
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    line-height: 300%;
}

.sidebar__section button:hover {
    color: white;
    background-color: black;
}

.sidebar__subsection {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: calc(100vh * 0.2);
}

.sidebar__subsection .sidebar__item {
    border-bottom: none;
    text-align: center;
    height: 100%;
}

.sidebar__subsection .sidebar__item:nth-child(1) {
    border-right: 1px black solid;
}
</style>