<script setup lang="ts">
import { useToggleStore } from '../../../store/toggles';
const store = useToggleStore()
</script>
<template>
    <header class="header">
        <button class="header__item underline" @mouseover="store.toggleSidebarMenu(true, 'sidebarMenu')"
            @mouseleave="store.toggleSidebarMenu(false, 'sidebarMenu')">MENU</button>
    </header>
</template>
<style scoped>
.header {
    display: flex;
    width: 100%;
    flex-direction: row;
    color: white;
    border: none;
    border-bottom: solid black 1px;
    justify-content: space-between;
}

.header .header__item {
    flex: 1 1 auto;
    padding: 0;
    border: none;
    background: none;
    border: none;
    font-size: 12px;
    height: calc(100vh * 0.07);
    letter-spacing: 2px;
    cursor: pointer;
    text-align:left;
    padding-left: 20px;
}
</style>