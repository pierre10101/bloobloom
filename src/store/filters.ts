// stores/counter.js
import { defineStore } from "pinia";
import { Ref, ref } from "vue";

type Shapes = {
  colour: Ref<string[]>;
  colours: string[];
  shape: Ref<string[]>;
  shapes: string[];
};
type State = {
    target: {
        value: any,
        checked: boolean
    }
}

export const useFiltersStore = defineStore("filters", {
  state: () =>
    <Shapes>{
      colour: ref([]),
      colours: ["black", "tortoise", "coloured", "crystal", "dark", "bright"],
      shape: ref([]),
      shapes: ["square", "rectangle", "round", "cat-eye"],
    },
  actions: {
    setShape(state: State | string) {
      if (typeof state !== 'string') {
        this.shape;
        if (!this.shape.includes(state.target.value) && state.target.checked) {
          this.shape.push(state.target.value);
        } else if (typeof state === 'string') {
          this.shape.splice(this.shape.indexOf(state), 1);
        }
      }
    },
    setColour(state: State) {
      if (!this.colour.includes(state.target.value) && state.target.checked) {
        this.colour.push(state.target.value);
      } else if (typeof state === 'string'){
        this.colour.splice(this.shape.indexOf(state), 1);
      }
    },
  },
});
