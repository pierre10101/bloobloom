<script setup lang="ts">
import { toRefs } from 'vue'
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
            <button class="dropdown__button flex">{{title}}</button>
            <div class="dropdown__content flex flex-column">
                <div class="flex flex-row flex-between item" v-for="(value,key) in data" :key="key">
                    <label :for="value">{{value}}</label>
                    <input :id="value" @input="$emit('select', $event)" type="checkbox" :value="value">
                </div>
            </div>
        </div>

</template>
<style>
.dropdown__button {
    background-color: white;
    border: none;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    color: black;
    flex: 1;
}

.dropdown {
    position: relative;
}

.dropdown__content {
    display: none;
    position: absolute;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown:hover .dropdown__content {
    display: flex;
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

@media (max-width: 1365.9px) {
    .dropdown__content {
        width: 8rem;
    }
}
</style>