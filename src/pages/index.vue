<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core'
const handleInfinityScroll = (event:boolean) => {
    console.log(event)
}
const target = ref(null)

useIntersectionObserver(
    target.value,
    ([{ isIntersecting }], observerElement) => {
        handleInfinityScroll(true)
    },
)
const fetchData = async () => {
   return await (await fetch('https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=1&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=coloured&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=black&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=round&filters[frame_variant_home_trial_available]=false')).json()
}
const data = ref<any>({glasses: ''});
onMounted(async () => {
    data.value = await fetchData()

})
</script>
<template>
<main class="main">
    <header>
        <div class="flex flex-double flex-end"><div class="flex header__item flex-horizontal-align flex-vertical-align">Spectacles Woman</div></div>
        <div class="flex flex-single flex-start">
            <div class="flex header__subitem flex-horizontal-align flex-vertical-align">
                columnour
            </div>
            <div class="flex header__subitem flex-horizontal-align flex-vertical-align">
                Shape
            </div>
        </div>
    </header>
    <section class="flex flex-row table">
        <section class="table__cell" v-for="(value,key) of data.glasses" :key="key" >
            <div v-if="(key + 1) % 12 !== 0">{{value.id}}</div>
            <div v-else ref="target">{{value.id}}</div>
        </section>
    </section>
</main>
</template>
<style scoped>
.main {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        z-index:1;
        position:relative;
}
header {
    display:flex;
    height: calc(100vh * 0.07); 
    padding: 0;
    background: none;
    font-size: 16px;
    letter-spacing: 2px;
    cursor: pointer;
    text-align: center;
    border-bottom: 1px solid black;
}

.table {
    height: calc(100vh * 0.07);
    padding: 0;
    background: none;
    font-size: 16px;
    letter-spacing: 2px;
    cursor: pointer;
    text-align: center;
    border-bottom: 1px solid black;
    flex-wrap: wrap;
}
.table__cell {
    width: calc(100vw * 0.33)
}
.header__item {
    border:none;
    width:50%;
    border-left: 1px solid black;
    border-right: 1px solid black;
}
.header__subitem {
    border: none;
    border-right: 1px solid black;
}
</style>