<template>
  <n-layout has-sider class="h-screen">
    <global-sider />
    <n-layout>
      <global-header />
      <global-content />
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import GlobalContent from './components/GlobalContent.vue'
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalSider from './components/GlobalSider.vue'
import { useTabsStore } from '@/store'
import { getFirstPath, loadAsyncRoutes } from '@/utils/router'
import { appMenu } from '@/mock'
import { useRoute } from 'vue-router'
import { router } from '@/router'

const tabsStore = useTabsStore()
const route = useRoute()
// 保存从后台返回的路由菜单
tabsStore.menu = appMenu
loadAsyncRoutes(appMenu)

// 移除全路径匹配导向404
router.removeRoute('NotFound')
router.addRoute({
  path: '/:path(.*)*',
  name: 'NotFound',
  redirect: '/404'
})

const is = ohterSkip()
if (!is) {
  const first = getFirstPath(appMenu)
  if (first) router.push(first)
  else router.push('/404')
}

function ohterSkip(): boolean {
  if (route.query && route.query.url && route.query.url != '/index') {
    // 检查路径是否有权限
    const routers = router.getRoutes()
    const one = routers.find(({ path }) => {
      return route.query.url == path
    })
    if (one) {
      let query = JSON.parse(route.query.query as string)
      router.push({
        path: route.query.url as string,
        query: Object.keys(query).length ? query : {}
      })
    } else {
      router.push({ path: '/404', replace: true })
    }
    
    return true
  }
  return false
}
</script>
