<script setup lang="ts">
import { useToggleStore } from '../../store/toggles';
const { gender } = defineProps<{
    gender: string | null
}>()
defineEmits<{
    (e: 'toggle', value: boolean): void
}>()
const store = useToggleStore();
</script>
<template>
    <section class="sidebar__section">
        <button class="sidebar__item"
            @click="store.toggleSidebarMenu(false, 'sidebarSubmenu'),store.toggleSidebarMenu(true, 'sidebarMenu')"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" class="sidemenu-tab-icon"><path d="M10 15.3999L2 8.1999L10 0.999902" stroke="black" stroke-opacity="0.85" stroke-width="1.5"></path></svg> <span>Go Back</span></button>
        <a :href="gender === 'women' ? '#women' : '#men'" class="sidebar__item">Spectacles</a>
        <a :href="gender === 'women' ? '#women' : '#men'" class="sidebar__item">SunGlasses</a>
    </section>
</template>
<style scoped>
.sidebar__section {
    display: flex;
    flex-direction: column;
    background:white;
}

.sidebar__item {
    flex: 1 1 auto;
    background: none;
    border: none;
    border-bottom: 1px black solid;
    cursor: pointer;
    height: calc(100vh * 0.1);
    text-align: left;
}

.sidebar__item:nth-child(1){
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.sidebar__item:not(:nth-child(1)):hover {
    color: white;
    background-color: black;
}

</style>