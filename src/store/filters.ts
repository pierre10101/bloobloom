// stores/counter.js
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const useFiltersStore = defineStore('filters', {
    state: () => <
        {
            colour: Ref<string[]>,
            colours: string[],
            shape: Ref<string[]>,
            shapes: string[],
        }
        >({
            colour: ref([]),
            colours: [
                "black", "tortoise", "coloured", "crystal", "dark", "bright"
            ],
            shape: ref([]),
            shapes: [
                 "square", "rectangle", "round", "cat-eye"
            ]
        }),
        actions: {
            setShape(state: string) {
                console.log(this.shape.indexOf(state))
                this.shape
                if (!this.shape.includes(state.target.value) && state.target.checked) {
                    this.shape.push(state.target.value)
                } else {
                    
                    this.shape.splice(this.shape.indexOf(state), 1)
                }
            },
            setColour(state: string) {
                console.log(this.shape.indexOf(state))
                if (!this.colour.includes(state.target.value) && state.target.checked) {
                    this.colour.push(state.target.value)
                } else {
                    this.colour.splice(this.shape.indexOf(state), 1)
                }
            }
        }
})
