<script setup lang="ts">

</script>
<template>
<main class="main">
    <header class="header">
        <div>Spectacles Woman</div>
        <div>Colour</div>
        <div>Shape</div>
    </header>
    <section class="content">
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
    </section>
</main>
</template>
<style scoped>
    .main {
        display:flex;
        flex-direction: row;
        width:100%;
        justify-content: space-between;
        z-index:1;
        position:relative;
    }
    .header {
        display:flex;
        flex-direction: row;
        width:100%;
        justify-content: space-between;
    }
    .content {
        display:flex;
        flex-direction: row;
        width:100%;
        justify-content: space-between;
    }
</style>