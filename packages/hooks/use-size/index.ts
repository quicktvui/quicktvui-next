import { computed, inject, unref } from 'vue'
import { buildProp } from '@quicktvui/utils'
import { componentSizes } from '@quicktvui/constants'

import type { InjectionKey, Ref } from 'vue'
import type { ComponentSize } from '@quicktvui/constants'

export const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false,
} as const)

export const useSizeProps = {
  size: useSizeProp,
}

export interface SizeContext {
  size: Ref<ComponentSize>
}

export const SIZE_INJECTION_KEY: InjectionKey<SizeContext> = Symbol('size')

export const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {} as SizeContext)

  return computed<ComponentSize>(() => {
    return unref(injectedSize.size) || ''
  })
}
