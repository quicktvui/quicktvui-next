import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { appIconProps } from './app-icon-props'

const AppIcon = defineComponent({
  name: 'QtAppIcon',
  props: appIconProps,
  setup(props, context) {
    const viewRef = ref()

    function setPackageName(packageName: string) {
      Native.callUIFunction(
        viewRef.value,
        'setPackageName',
        [packageName],
        () => {
          //
        }
      )
    }

    function setRoundingRadius(roundingRadius: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRoundingRadius',
        [roundingRadius],
        () => {
          //
        }
      )
    }

    const render = () => {
      return h('ESAppIconViewComponent', {
        ref: viewRef,
        ...(props.packageName !== undefined && {
          packageName: props.packageName,
        }),
        ...(props.roundingRadius !== undefined && {
          roundingRadius: props.roundingRadius,
        }),
      })
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      setRoundingRadius,
      setPackageName,
    }
  },
  render() {
    return this.render()
  },
})

export default AppIcon
