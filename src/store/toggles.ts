// stores/counter.js
import { defineStore } from 'pinia'

export const useToggleStore = defineStore('toggle', {
  state: () => <
    {
      sidebarMenu: boolean,
      sidebarSubmenu: boolean,
      mockupSidebarWidth: number,
      gender: string | null,
      product: string | null
    }
    >({
      sidebarMenu: false,
      sidebarSubmenu: false,
      mockupSidebarWidth: 0.45,
      gender: null,
      product: null
    }),
  actions: {
    toggleSidebarMenu(state: boolean, sidebar: string, gender: string | null = null) {
      this.gender = gender;
      if (sidebar === 'sidebarMenu') {
        this.sidebarMenu = state;
        return;
      }
      if (sidebar === 'sidebarSubmenu') {
        this.sidebarSubmenu = state;
      }
    },
    setProduct(state:string|null) {
      this.product = state;
    }
  },
})
