<script setup lang="ts">
import Footer from './components/layouts/Footer.vue';
import CollectionsMenu from './components/CollectionsMenu.vue';
</script>
<template>
   <CollectionsMenu/>
   <router-view />
   <Footer />
</template>
