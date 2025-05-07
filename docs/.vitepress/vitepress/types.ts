export type Link = {
  text: string
  link: string
  promotion?: string
  activeMatch: string
}

export interface ServerResponse<T> {
  code: number
  data: T
}
