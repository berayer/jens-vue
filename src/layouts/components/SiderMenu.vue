<template>
  <n-menu
    :indent="16"
    :collapsed-width="appStore.siderCollapseWidth"
    :collapsed="appStore.siderCollapse"
    :options="menuOptions"
    @update:value="handleUpdateValue"
  ></n-menu>
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import Icon from '@/components/Icon.vue'
import { useAppStore, useTabsStore } from '@/store'

const appStore = useAppStore()
const tabsStore = useTabsStore()
const menuOptions: MenuOption[] = appMenuToMenuOption(tabsStore.menu)

// 递归将后台菜单转换为N-Menu
function appMenuToMenuOption(menus: AppMenu[]): MenuOption[] {
  return menus.map((item) => {
    const menu: MenuOption = {
      label: item.label,
      key: item.path,
      icon: () => h(Icon, { name: item.icon! })
    }
    if (item.children) {
      menu.children = appMenuToMenuOption(item.children)
    }
    return menu
  })
}

// 菜单被点击事件
function handleUpdateValue(key: string) {
  console.log(key)
}
</script>
