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
import { useAppStore } from '@/store'

const appStore = useAppStore()
const menuOptions: MenuOption[] = [
  {
    label: '首页',
    icon: () => h(Icon, { name: 'mdi:home-outline' }),
    key: '/home'
  },
  {
    label: '系统设置',
    icon: () => h(Icon, { name: 'mdi:cog-outline' }),
    key: '/system',
    children: [
      {
        label: '用户管理',
        icon: () => h(Icon, { name: 'mdi:account-outline' }),
        key: '/system/user'
      },
      {
        label: '角色管理',
        icon: () => h(Icon, { name: 'mdi:account-group-outline' }),
        key: '/system/role'
      },
      {
        label: '菜单管理',
        icon: () => h(Icon, { name: 'mdi:view-grid-outline' }),
        key: '/system/menu'
      }
    ]
  },
  {
    label: '关于',
    icon: () => h(Icon, { name: 'mdi:information-outline' }),
    key: '/about'
  }
]

// 菜单被点击事件
function handleUpdateValue(key: string) {
  console.log(key)

}
</script>
