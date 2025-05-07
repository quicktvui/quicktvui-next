import installer from './defaults'
export * from '@quicktvui/components'
export * from '@quicktvui/constants'
export * from '@quicktvui/directives'
export * from '@quicktvui/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
