<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import { vIntersectionObserver } from '@vueuse/components'
import { useFiltersStore } from '../store/filters';
import Dropdown from './dropdowns/Dropdown.vue';
import { storeToRefs } from 'pinia'
import { computed } from '@vue/reactivity';
const store = useFiltersStore();
const { setShape, setColour } = store;
const { colour, colours, shape, shapes } = storeToRefs(store)
const data = ref<any>([]);
const handleInfinityScroll = async (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
        if (data.value.length === 0) {
            data.value = (await fetchData()).glasses;
        } else {
            data.value = data.value.concat((await fetchData()).glasses);
        }
    }
};
const cleanData = computed(() => {
    return data.value;
})
const fetchData = async () => {
    const glasses: any = (await (await fetch(url.value)).json()).glasses
    let filtered: any = [];
    for (const item of glasses) {
        if (await checkImageExists(item.glass_variants[0].media[0].url)) {
            filtered.push(item);
        }
    }
    return { glasses: filtered };
}
const checkImageExists = async (imageUrl: string): Promise<boolean> => {
    try {
        const response = await fetch(imageUrl, { method: 'HEAD' });
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log('here')
        // Handle any request exceptions (e.g., network issues)
        return false;
    }
}
let page = ref(1);
onMounted(async () => {
    data.value = (await fetchData()).glasses
    page.value++
})

const calculateMiddleColumn = (column: number) => {
    if (column % 3 === 0) {
        return true;
    }
    return false;
}
const applyFilter = async () => {
    data.value = [];
    page.value = 1;
    data.value = (await fetchData()).glasses
    page.value++
}
const shapeUrl = computed(() => shape.value.map(value => `filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${value}`).join('&'))
const colourUrl = computed(() => colour.value.map(value => `filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${value}`).join('&'))
const url = computed(() => {
    let formatUrl = `https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=${page.value}&filters[frame_variant_home_trial_available]=false`;
    if (shapeUrl.value) {
        formatUrl += '&' + shapeUrl.value
    }
    if (colourUrl.value) {
        formatUrl += '&' + colourUrl.value
    }
    return formatUrl;
})
</script>
<template>
    <main class="main">
        <header>
            <section class="flex flex-double flex-end">
                <div class="flex header__item flex-horizontal-align flex-vertical-align">Spectacles Woman</div>
            </section>
            <section class="flex flex-single flex-start">
                <div class="flex header__subitem flex-horizontal-align flex-vertical-align">
                    <Dropdown title="Colour" :data="colours" @select="setColour($event), applyFilter()" :item="colour" />
                </div>
                <div class="flex header__subitem flex-horizontal-align flex-vertical-align">
                    <Dropdown title="Shape" :data="shapes" @select="setShape($event), applyFilter()" :item="shape" />
                </div>
            </section>
        </header>
        <section class="flex flex-row table">
            <section :class="calculateMiddleColumn(key + 1) ? 'flex table__cell_last' : 'flex table__cell'"
                v-for="(value, key) of cleanData" :key="key">
                <div class="flex cell__item" v-if="(key + 1) % 2 !== 0">
                    <h1 class="title">{{ value.name }}</h1>
                    <img :src="value.glass_variants[0].media[0].url" alt="glasses" />
                </div>
                <div class="flex cell__item" v-else v-intersection-observer="handleInfinityScroll">
                    <h1 class="title">{{ value.name }}</h1>
                    <img :src="value.glass_variants[0].media[0].url" alt="glasses" />
                </div>
            </section>
        </section>
    </main>
</template>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    position: relative;
}

header {
    display: flex;
    height: calc(100vh * 0.07);
    width: 100%;
    padding: 0;
    background: none;
    font-size: 24px;
    font-weight: bold;
    font-variant: small-caps;
    letter-spacing: 2px;
    cursor: pointer;
    text-align: center;
}

@media (max-width: 1365.9px) {
    header {
        flex-direction: column;
        height: auto;
    }

    header section {
        justify-content: center;
        flex: 1;
    }

    main header section:nth-child(1) {
        border: none;
        border-bottom: 1px solid black;
    }

    .header__subitem:nth-child(1) {
        border-left: 1px solid black;
    }
}

.table {
    border-top: 1px solid black;
    height: calc(100vh * 0.45);
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
    width: 33.25%;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
}

.table__cell_last {
    width: 33.37%;
    border: none;
    border-bottom: 1px solid black;
}

@media (max-width: 1365.9px) {
    .table__cell {
        width: 50%;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
    }

    .table__cell_last {
        width: 50%;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
    }
}

@media (max-width: 600px) {
    .table__cell {
        width: 100%;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
    }

    .table__cell_last {
        width: 100%;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
    }
}

.cell__item {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
}

.header__item {
    border: none;
    width: 50%;
    border-left: 1px solid black;
    border-right: 1px solid black;
}

.header__subitem {
    width: 25%;
    border: none;
    border-right: 1px solid black;
}

img {
    max-width: 100%;
    max-height: 100%;
}

.title {
    position: absolute;
    text-align: center;
}
</style>