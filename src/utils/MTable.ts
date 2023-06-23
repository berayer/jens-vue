import http from '@/utils/request'
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DataTableColumns } from 'naive-ui'

export class DataTable {
  private api: ApiRequest
  columns: DataTableColumns
  data: any[] = []
  total = 0
  private params: anyObj = {
    page: 1,
    size: 20
  }
  private isPaging: boolean

  constructor(columns: DataTableColumns, api: ApiRequest, isPaging = true) {
    this.columns = columns
    this.api = api
    this.isPaging = isPaging
  }

  // 加载数据
  loadData() {
    this.api
      .search(this.params)
      .then((res) => {
        // 如果是分页数据
        if (this.isPaging) {
          this.total = res.data.total
          this.data.push(...res.data.records)
        } else {
          this.data = res.data
          this.total = this.data.length
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

export class ApiRequest {
  private baseUrl: string

  constructor(url: string) {
    this.baseUrl = url
  }

  // 查询
  search(params: anyObj) {
    return http({
      url: this.baseUrl + '/search',
      method: 'get',
      params
    })
  }

  // 修改
  edit(data: anyObj) {
    return http({
      url: this.baseUrl + '/edit',
      method: 'put',
      data
    })
  }

  // 新增
  add(data: anyObj) {
    return http({
      url: this.baseUrl + '/edit',
      method: 'post',
      data
    })
  }

  // 删除
  delete(id: number | number[]) {
    return http({
      url: this.baseUrl + '/edit',
      method: 'delete',
      data: {
        id: id
      }
    })
  }
}
