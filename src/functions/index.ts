import { IQueryParams } from '../store/types'

function setQueryParams(queryParams: IQueryParams): string {
  const limit = queryParams.limit ? `&_limit=${queryParams.limit}` : ''
  const page = queryParams.page ? `&_page=${queryParams.page}` : ''
  const sort = queryParams.sort ? `&_sort=${queryParams.sort}` : ''
  const order = queryParams.order ? `&_order=${queryParams.order}` : ''
  return `${limit}${page}${sort}${order}`
}

export default setQueryParams
