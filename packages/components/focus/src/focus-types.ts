export interface QTFocusable {
  enable: boolean
  scale?: number
  border?: boolean
}

export enum QTDescendantFocusability {
  QT_FOCUS_BEFORE_DESCENDANTS = 'beforeDescendants',
  QT_FOCUS_AFTER_DESCENDANTS = 'afterDescendants',
  QT_FOCUS_BLOCK_DESCENDANTS = 'blockDescendants',
}

export enum QTFocusDescendant {
  QT_FOCUS_BEFORE_DESCENDANTS = 131072,
  QT_FOCUS_AFTER_DESCENDANTS = 262144,
  QT_FOCUS_BLOCK_DESCENDANTS = 393216,
}

export enum QTFocusDirection {
  QT_FOCUS_DIRECTION_BACKWARD = 1,
  QT_FOCUS_DIRECTION_FORWARD = 2,
  QT_FOCUS_DIRECTION_LEFT = 17,
  QT_FOCUS_DIRECTION_UP = 33,
  QT_FOCUS_DIRECTION_RIGHT = 66,
  QT_FOCUS_DIRECTION_DOWN = 130,
}

export enum QTFocusDirectionName {
  QT_FOCUS_DIRECTION_ALL = 'all',
  QT_FOCUS_DIRECTION_LEFT = 'left',
  QT_FOCUS_DIRECTION_UP = 'up',
  QT_FOCUS_DIRECTION_RIGHT = 'right',
  QT_FOCUS_DIRECTION_DOWN = 'down',
}
