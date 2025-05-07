import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import { useESDisplay } from '@extscreen/es3-core'
import useBaseView from '../../base/src/useBaseView'
import { QTAnimationPropertyName } from './animation-types'
import type {
  QTAnimationEvent,
  QTAnimationInterpolator,
  QTAnimationRepeatMode,
  QTAnimationValueType,
  QTAnimatorId,
} from './animation-types'

const Animation = defineComponent({
  name: 'QtAnimation',
  emits: [
    'onAnimationEnd',
    'onAnimationCancel',
    'onAnimationStart',
    'onAnimationRepeat',
    'onAnimationPause',
    'onAnimationResume',
    'onAnimationUpdate',
  ],
  setup(props, context) {
    const viewRef = ref()
    const display = useESDisplay()

    const displayScale = display.getDisplayScale()

    function setPivotX(pivotX: number) {
      Native.callUIFunction(viewRef.value, 'setPivotX', [pivotX], () => {
        //
      })
    }

    function setPivotY(pivotY: number) {
      Native.callUIFunction(viewRef.value, 'setPivotY', [pivotY], () => {
        //
      })
    }

    function resetPivot() {
      Native.callUIFunction(viewRef.value, 'resetPivot', [], () => {
        //
      })
    }

    function resetAnimators() {
      Native.callUIFunction(viewRef.value, 'resetAnimators', [], () => {
        //
      })
    }

    function animatorSet(
      animatorId: QTAnimatorId,
      duration: number,
      listenAnimator: boolean
    ) {
      Native.callUIFunction(
        viewRef.value,
        'animatorSet',
        [animatorId, duration, listenAnimator],
        () => {
          //
        }
      )
    }

    function startAnimator(animatorId: QTAnimatorId) {
      console.log('------1------animatorId--------->>>>animatorId:', animatorId)
      console.log('------2------animatorId--------->>>>viewRef:', viewRef.value)
      Native.callUIFunction(
        viewRef.value,
        'startAnimator',
        [animatorId],
        () => {
          //
        }
      )
      console.log('-------3----animatorId--------->>>>animatorId:', animatorId)
    }

    function startAnimatorDelay(animatorId: QTAnimatorId, delay: number) {
      Native.callUIFunction(
        viewRef.value,
        'startAnimatorDelay',
        [animatorId, delay],
        () => {
          //
        }
      )
    }

    function pauseAnimator(animatorId: QTAnimatorId) {
      Native.callUIFunction(
        viewRef.value,
        'pauseAnimator',
        [animatorId],
        () => {
          //
        }
      )
    }

    function resumeAnimator(animatorId: QTAnimatorId) {
      Native.callUIFunction(
        viewRef.value,
        'resumeAnimator',
        [animatorId],
        () => {
          //
        }
      )
    }

    function cancelAnimator(animatorId: QTAnimatorId) {
      Native.callUIFunction(
        viewRef.value,
        'cancelAnimator',
        [animatorId],
        () => {
          //
        }
      )
    }

    function reverseAnimator(animatorId: QTAnimatorId) {
      Native.callUIFunction(
        viewRef.value,
        'reverseAnimator',
        [animatorId],
        () => {
          //
        }
      )
    }

    function play(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
      Native.callUIFunction(
        viewRef.value,
        'play',
        [animatorSetId, animatorId],
        () => {
          //
        }
      )
    }

    function playWith(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
      Native.callUIFunction(
        viewRef.value,
        'with',
        [animatorSetId, animatorId],
        () => {
          //
        }
      )
    }

    function playBefore(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
      Native.callUIFunction(
        viewRef.value,
        'before',
        [animatorSetId, animatorId],
        () => {
          //
        }
      )
    }

    function playAfter(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
      Native.callUIFunction(
        viewRef.value,
        'after',
        [animatorSetId, animatorId],
        () => {
          //
        }
      )
    }

    function playAfterDelay(animatorSetId: QTAnimatorId, delay: number) {
      Native.callUIFunction(
        viewRef.value,
        'afterDelay',
        [animatorSetId, delay],
        () => {
          //
        }
      )
    }

    function playSequentially1(
      animatorSetId: QTAnimatorId,
      animatorId1: QTAnimatorId
    ) {
      Native.callUIFunction(
        viewRef.value,
        'playSequentially1',
        [animatorSetId, animatorId1],
        () => {
          //
        }
      )
    }

    function playSequentially2(
      animatorSetId: QTAnimatorId,
      animatorId1: QTAnimatorId,
      animatorId2: QTAnimatorId
    ) {
      Native.callUIFunction(
        viewRef.value,
        'playSequentially2',
        [animatorSetId, animatorId1, animatorId2],
        () => {
          //
        }
      )
    }

    function playSequentially3(
      animatorSetId: QTAnimatorId,
      animatorId1: QTAnimatorId,
      animatorId2: QTAnimatorId,
      animatorId3: QTAnimatorId
    ) {
      Native.callUIFunction(
        viewRef.value,
        'playSequentially3',
        [animatorSetId, animatorId1, animatorId2, animatorId3],
        () => {
          //
        }
      )
    }

    function playSequentially4(
      animatorSetId: QTAnimatorId,
      animatorId1: QTAnimatorId,
      animatorId2: QTAnimatorId,
      animatorId3: QTAnimatorId,
      animatorId4: QTAnimatorId
    ) {
      Native.callUIFunction(
        viewRef.value,
        'playSequentially4',
        [animatorSetId, animatorId1, animatorId2, animatorId3, animatorId4],
        () => {
          //
        }
      )
    }

    function playSequentially5(
      animatorSetId: QTAnimatorId,
      animatorId1: QTAnimatorId,
      animatorId2: QTAnimatorId,
      animatorId3: QTAnimatorId,
      animatorId4: QTAnimatorId,
      animatorId5: QTAnimatorId
    ) {
      Native.callUIFunction(
        viewRef.value,
        'playSequentially5',
        [
          animatorSetId,
          animatorId1,
          animatorId2,
          animatorId3,
          animatorId4,
          animatorId5,
        ],
        () => {
          //
        }
      )
    }

    function playTogether1(
      animatorSetId: QTAnimatorId,
      animatorId1: QTAnimatorId
    ) {
      Native.callUIFunction(
        viewRef.value,
        'playTogether1',
        [animatorSetId, animatorId1],
        () => {
          //
        }
      )
    }

    function playTogether2(
      animatorSetId: QTAnimatorId,
      animatorId1: QTAnimatorId,
      animatorId2: QTAnimatorId
    ) {
      Native.callUIFunction(
        viewRef.value,
        'playTogether2',
        [animatorSetId, animatorId1, animatorId2],
        () => {
          //
        }
      )
    }

    function playTogether3(
      animatorSetId: QTAnimatorId,
      animatorId1: QTAnimatorId,
      animatorId2: QTAnimatorId,
      animatorId3: QTAnimatorId
    ) {
      Native.callUIFunction(
        viewRef.value,
        'playTogether3',
        [animatorSetId, animatorId1, animatorId2, animatorId3],
        () => {
          //
        }
      )
    }

    function playTogether4(
      animatorSetId: QTAnimatorId,
      animatorId1: QTAnimatorId,
      animatorId2: QTAnimatorId,
      animatorId3: QTAnimatorId,
      animatorId4: QTAnimatorId
    ) {
      Native.callUIFunction(
        viewRef.value,
        'playTogether4',
        [animatorSetId, animatorId1, animatorId2, animatorId3, animatorId4],
        () => {
          //
        }
      )
    }

    function playTogether5(
      animatorSetId: QTAnimatorId,
      animatorId1: QTAnimatorId,
      animatorId2: QTAnimatorId,
      animatorId3: QTAnimatorId,
      animatorId4: QTAnimatorId,
      animatorId5: QTAnimatorId
    ) {
      Native.callUIFunction(
        viewRef.value,
        'playTogether5',
        [
          animatorSetId,
          animatorId1,
          animatorId2,
          animatorId3,
          animatorId4,
          animatorId5,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator',
        [
          id,
          valueType,
          propertyName,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator1(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      value1: number,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      if (
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z
      ) {
        value1 = value1 * displayScale
      }
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator1',
        [
          id,
          valueType,
          propertyName,
          value1,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator2(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      value1: number,
      value2: number,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      if (
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z
      ) {
        value1 = value1 * displayScale
        value2 = value2 * displayScale
      }
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator2',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator3(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      value1: number,
      value2: number,
      value3: number,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      if (
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z
      ) {
        value1 = value1 * displayScale
        value2 = value2 * displayScale
        value3 = value3 * displayScale
      }
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator3',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator4(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      value1: number,
      value2: number,
      value3: number,
      value4: number,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      if (
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z
      ) {
        value1 = value1 * displayScale
        value2 = value2 * displayScale
        value3 = value3 * displayScale
        value4 = value4 * displayScale
      }
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator4',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator5(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      value1: number,
      value2: number,
      value3: number,
      value4: number,
      value5: number,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      if (
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z
      ) {
        value1 = value1 * displayScale
        value2 = value2 * displayScale
        value3 = value3 * displayScale
        value4 = value4 * displayScale
        value5 = value5 * displayScale
      }
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator5',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator6(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      value1: number,
      value2: number,
      value3: number,
      value4: number,
      value5: number,
      value6: number,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      if (
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z
      ) {
        value1 = value1 * displayScale
        value2 = value2 * displayScale
        value3 = value3 * displayScale
        value4 = value4 * displayScale
        value5 = value5 * displayScale
        value6 = value6 * displayScale
      }
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator6',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          value6,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator7(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      value1: number,
      value2: number,
      value3: number,
      value4: number,
      value5: number,
      value6: number,
      value7: number,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      if (
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z
      ) {
        value1 = value1 * displayScale
        value2 = value2 * displayScale
        value3 = value3 * displayScale
        value4 = value4 * displayScale
        value5 = value5 * displayScale
        value6 = value6 * displayScale
        value7 = value7 * displayScale
      }
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator7',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          value6,
          value7,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator8(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      value1: number,
      value2: number,
      value3: number,
      value4: number,
      value5: number,
      value6: number,
      value7: number,
      value8: number,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      if (
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z
      ) {
        value1 = value1 * displayScale
        value2 = value2 * displayScale
        value3 = value3 * displayScale
        value4 = value4 * displayScale
        value5 = value5 * displayScale
        value6 = value6 * displayScale
        value7 = value7 * displayScale
        value8 = value8 * displayScale
      }
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator8',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          value6,
          value7,
          value8,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator9(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      value1: number,
      value2: number,
      value3: number,
      value4: number,
      value5: number,
      value6: number,
      value7: number,
      value8: number,
      value9: number,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      if (
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z
      ) {
        value1 = value1 * displayScale
        value2 = value2 * displayScale
        value3 = value3 * displayScale
        value4 = value4 * displayScale
        value5 = value5 * displayScale
        value6 = value6 * displayScale
        value7 = value7 * displayScale
        value8 = value8 * displayScale
        value9 = value9 * displayScale
      }
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator9',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          value6,
          value7,
          value8,
          value9,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    function objectAnimator10(
      id: QTAnimatorId,
      valueType: QTAnimationValueType,
      propertyName: QTAnimationPropertyName,
      value1: number,
      value2: number,
      value3: number,
      value4: number,
      value5: number,
      value6: number,
      value7: number,
      value8: number,
      value9: number,
      value10: number,
      duration: number,
      repeatMode: QTAnimationRepeatMode,
      repeatCount: number,
      listenAnimator: boolean,
      listenAnimatorValue: boolean,
      interpolator?: QTAnimationInterpolator
    ) {
      if (
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
        propertyName ==
          QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z
      ) {
        value1 = value1 * displayScale
        value2 = value2 * displayScale
        value3 = value3 * displayScale
        value4 = value4 * displayScale
        value5 = value5 * displayScale
        value6 = value6 * displayScale
        value7 = value7 * displayScale
        value8 = value8 * displayScale
        value9 = value9 * displayScale
        value10 = value10 * displayScale
      }
      Native.callUIFunction(
        viewRef.value,
        'objectAnimator10',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          value6,
          value7,
          value8,
          value9,
          value10,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
        () => {
          //
        }
      )
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'AnimationViewComponent',
        {
          ref: viewRef,
          onAnimationCancel: (evt: QTAnimationEvent) => {
            const id = evt.animationId
            context.emit('onAnimationCancel', id)
          },
          onAnimationEnd: (evt: QTAnimationEvent) => {
            const id = evt.animationId
            const isReverse = evt.isReverse
            context.emit('onAnimationEnd', id, isReverse)
          },
          onAnimationRepeat: (evt: QTAnimationEvent) => {
            const id = evt.animationId
            context.emit('onAnimationRepeat', id)
          },
          onAnimationStart: (evt: QTAnimationEvent) => {
            const id = evt.animationId
            const isReverse = evt.isReverse
            context.emit('onAnimationStart', id, isReverse)
          },
          onAnimationPause: (evt: QTAnimationEvent) => {
            const id = evt.animationId
            context.emit('onAnimationPause', id)
          },
          onAnimationResume: (evt: QTAnimationEvent) => {
            const id = evt.animationId
            context.emit('onAnimationResume', id)
          },
          onAnimationUpdate: (evt: QTAnimationEvent) => {
            const id = evt.animationId
            const value = evt.animatedValue
            context.emit('onAnimationUpdate', id, value)
          },
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      setPivotX,
      setPivotY,
      resetPivot,
      resetAnimators,
      animatorSet,
      startAnimator,
      startAnimatorDelay,
      pauseAnimator,
      resumeAnimator,
      cancelAnimator,
      reverseAnimator,
      play,
      playWith,
      playBefore,
      playAfter,
      playAfterDelay,
      playSequentially1,
      playSequentially2,
      playSequentially3,
      playSequentially4,
      playSequentially5,
      playTogether1,
      playTogether2,
      playTogether3,
      playTogether4,
      playTogether5,
      objectAnimator,
      objectAnimator1,
      objectAnimator2,
      objectAnimator3,
      objectAnimator4,
      objectAnimator5,
      objectAnimator6,
      objectAnimator7,
      objectAnimator8,
      objectAnimator9,
      objectAnimator10,
      render,
    }
  },
  render() {
    return this.render()
  },
})

export default Animation
