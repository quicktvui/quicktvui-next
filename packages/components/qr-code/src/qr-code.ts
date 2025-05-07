import { defineComponent, h, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { qrCodeProps } from './qr-code-props'

const QRCode = defineComponent({
  name: 'QtQrCode',
  props: qrCodeProps,
  setup(props, context) {
    const viewRef = ref()

    const render = () => {
      return h('QrCodeComponent', {
        ref: viewRef,
        ...(props.content !== undefined && { content: props.content }),
        ...(props.optimize !== undefined && { optimize: props.optimize }),
      })
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
    }
  },
  render() {
    return this.render()
  },
})

export default QRCode
