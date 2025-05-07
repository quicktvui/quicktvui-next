export interface QTTextSpan {
  text: string
  spanAttr: QTTextSpanAttribute
}

export interface QTTextSpanAttribute {
  type: QTTextSpanAttributeType
  value: Array<number>
}

export enum QTTextSpanAttributeType {
  QT_TEXT_SPAN_ATTRIBUTE_TYPE_SIZE = 'size',
  QT_TEXT_SPAN_ATTRIBUTE_TYPE_COLOR = 'color',
}
