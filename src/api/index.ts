import http from '@/utils/request'

/**
 * 用户后台登陆接口
 * @param data 登陆表单数据
 */
export function v_login(data: { username: string; password: string; rememberMe: boolean }) {
  return http({
    url: '/login',
    method: 'post',
    data
  })
}
