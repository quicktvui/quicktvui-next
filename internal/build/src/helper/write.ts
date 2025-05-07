import { resolve } from 'node:path'
import { mkdir, writeFileSync } from 'node:fs'
import type { Options, Props, Tags, WebTypes } from './type'

export function write(
  options: Options,
  type: 'tags' | 'attributes' | 'webTypes',
  data: Tags | Props | WebTypes
): void {
  const path = resolve(options.outDir, options[type])
  const buffer = JSON.stringify(data, null, options.space)

  mkdir(resolve(options.outDir), { recursive: true }, () => {
    writeFileSync(path, buffer)
  })
}
