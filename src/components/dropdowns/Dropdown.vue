<script setup lang="ts">
import { Ref, toRefs } from 'vue'
const props = defineProps<{
    title: string,
    data: string[]
}>()
const { title, data } = toRefs(props);
defineEmits<{
    (e: 'select', value: any): void
}>()

</script>
<template>
        <div class="dropdown">
            <button class="dropbtn">{{title}}</button>
            <div class="dropdown-content flex flex-column">
                <div class="flex flex-row flex-between item" v-for="(value,key) in data" :key="key">
                    <label :for="value">{{value}}</label>
                    <input :id="value" @input="$emit('select', $event)" type="checkbox" :value="value">
                </div>
            </div>
        </div>

</template>
<style>
ul {
    list-style: none;
}
.dropbtn {
    background-color: white;
    border: none;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    color: black;
}

.dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: black;
    color: white;
}
label {
    font-size: 12px;
}
input[type='checkbox'] {
    accent-color: black;
}
.item {
    margin: 1rem 1rem 0 1rem;
}
</style>