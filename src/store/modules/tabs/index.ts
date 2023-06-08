import { defineStore } from 'pinia'
import { appMenu } from '@/mock'

interface TabsState {
  menu: AppMenu[]
}

export const useTabsStore = defineStore('tabs-store', {
  state: (): TabsState => ({
    menu: appMenu
  })
})
