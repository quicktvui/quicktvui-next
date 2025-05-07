import { Native } from '@extscreen/es3-vue'

export function callUIFunction(sid: string, method: string, args: Array<any>) {
  Native.callNative('ExtendModule', 'callUIFunction', [sid, method, args])
}

export function callUIFunctionWithPromise<T>(
  sid: string,
  method: string,
  args: Array<any>
): Promise<T> {
  return new Promise((resolve) => {
    Native.callNative(
      'ExtendModule',
      'callUIFunctionWithPromise',
      [sid, method, args],
      (ret: T) => {
        resolve(ret)
      }
    )
  })
}
