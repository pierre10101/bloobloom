<script setup lang="ts">
const {left} = defineProps<{
    left: number
    zIndex: number,
    width: number
}>()
defineEmits<{
  (e: 'toggle', value: boolean): void
}>()

</script>
<template>
    <aside class="sidebar" @mouseover="$emit('toggle', true)" @mouseleave="$emit('toggle', false)">
        <slot></slot>
    </aside>
</template>
<style scoped>
.sidebar {
    display:flex;
    flex-direction: row;
    position:absolute;
    left:v-bind(left+"px");
    border: 1px black solid;
    border-top: none;
    border-right:none;
    transition:left 0.3s linear;
    width: calc(100vw * v-bind(width));
    height:calc(100vh - (100vh * 0.076));
    background-color:white;
 }
</style>