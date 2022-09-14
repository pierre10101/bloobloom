<script setup lang="ts">
import Sidebar from '../components/layouts/sidebar/Sidebar.vue';
import { useToggleStore } from '../store/toggles';
import MockupSidebarMenu from '../components/sidebar/MockupSidebarMenu.vue';
import MockupHeader from '../components/layouts/header/MockupHeader.vue';
import MockupSidebarSubmenu from './sidebar/MockupSidebarSubmenu.vue';
const store = useToggleStore();
</script>
<template>
    <MockupHeader />
    <section class="collections_section">
        <Sidebar :width="store.mockupSidebarWidth" :left="store.sidebarMenu ? 0 : -1000" :z-index="2"
            @toggle="store.toggleSidebarMenu($event, 'sidebarMenu'), store.setProduct(null)">
            <MockupSidebarMenu />
            <MockupSidebarSubmenu />
        </Sidebar>
    </section>
</template>
<style>
    .collections_section {
        display:flex;
    }
</style>