import { defineStore } from 'pinia'
interface TabsState {
  menu: AppMenu[]
}

export const useTabsStore = defineStore('tabs-store', {
  state: (): TabsState => ({
    menu: []
  }),
  actions: {
    getRouteContext(key: string, menus?: AppMenu[]): AppMenu[] {
      if (!menus) menus = this.menu
      let res: AppMenu[] = []

      for (let i = 0; i < menus.length; i++) {
        if (menus[i].children && menus[i].children!.length > 0) {
          const children = this.getRouteContext(key, menus[i].children)
          if (children && children.length > 0) {
            res = [menus[i], ...children]
            break
          }
        } else if (menus[i].path == key) {
          res = [menus[i]]
          break
        }
      }

      return res
    }
  }
})
