# qt-media-series-pro 媒体分集组件

`qt-media-series-pro` 是一个用于展示媒体分集列表的专业级组件，支持多种样式切换、分页加载、自动分组以及焦点联动等功能。适用于影视剧、综艺等多集数节目的分集展示场景。

## 核心功能

- **多种样式**: 支持纯数字、纯文字、左图右文、上图下文以及自定义样式。
- **自动分组**: 当集数较多时，自动进行分页分组（如 1-10, 11-20），提升用户查找效率。
- **分页加载**: 支持大规模数据的分页按需加载，提供数据加载回调。
- **焦点联动**: 分集列表与分组列表之间的双向焦点联动，滚动分集时分组自动切换，点击分组时分集自动跳转。
- **高度可定制**: 支持自定义 Item 宽度、高度、分组大小等。

## 组件引入

```ts
//在main.ts中全局引入QuickTVUI后即可直接使用
import { QuickTVUI } from '@quicktvui/quicktvui3'
app.use(QuickTVUI)
```

## 代码示例

### 1. 基础用法 (纯数字样式)

最简单的用法，只需指定总集数。
由于播放状态对应currentIndex，因此使用者需要自行维护currentIndex值，以实现播放状态的显示。

```vue
<template>
  <qt-media-series-pro
    :totalEpisodes="50"
    :currentIndex="currentIndex"
    @item-click="onItemClick"
  />
</template>

<script setup lang="ts">
const currentIndex=ref(0)
const onItemClick = (index: number) => {
  console.log('点击了第', index + 1, '集');
  currentIndex.value=index
};
</script>
```

### 2. 分页加载数据

当集数非常多或需要展示详细信息（标题、图片）时，建议使用分页加载。
按照类型规则传入参数SeriesItemLoad，包含title、subtitle、imageUrl,corner属性。

```vue
<template>
  <qt-media-series-pro
    :totalEpisodes="100"
    :seriesStyle="SeriesStyleType.IMAGE_LEFT_TEXT_RIGHT"
    :onLoadPageData="loadPageData"
    @item-click="onItemClick"
  />
</template>

<script setup lang="ts">
import { SeriesStyleType } from '@quicktvui/quicktvui3';
import type { SeriesItemLoad } from '@quicktvui/quicktvui3';

const loadPageData = async (pageIndex: number, pageSize: number): Promise<SeriesItemLoad[]> => {
  // 模拟接口请求
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: SeriesItemLoad[] = [];
      for (let i = 0; i < pageSize; i++) {
        const globalIndex = pageIndex * pageSize + i;
        data.push({
          type: 1,
          title: `第${globalIndex + 1}集 精彩标题`,
          subtitle: '更新至2024-03-05',
          imageUrl: 'https://example.com/poster.jpg'
        });
      }
      resolve(data);
    }, 500);
  });
};
</script>
```

### 3. 自定义样式

如果内置样式无法满足需求，可以使用 `custom` 样式并通过插槽自定义内容。
isPlaying属性值内部维护，需要根据播放状态显示时，可以直接使用showIf="${isPlaying==true}"或者showIf="${isPlaying==false}"

```vue
<template>
  <qt-media-series-pro
    :totalEpisodes="12"
    :seriesStyle="SeriesStyleType.CUSTOM"
    :itemWidth="200"
    :itemHeight="300"
  >
    <template #custom>
      <qt-view type="1" :focusable="true" class="custom-item">
        <qt-text text="${title}" />
        <qt-text text="${subtitle}" />
        <play-mark
showIf="${isPlaying}" name="playMark" class="detail-series-item-mark"
                 markColor="#13161B" :gap="2" :focusable="false"/>
      </qt-view>
    </template>
  </qt-media-series-pro>
</template>
```

## API 参考

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `totalEpisodes` | 总集数 | `number` | `0` |
| `currentIndex` | 当前播放/选中的集数索引（从0开始） | `number` | `0` |
| `groupSize` | 分组大小（多少集一组） | `number` | `3` |
| `showGroup` | 是否显示分组列表 | `boolean` | `true` |
| `seriesStyle` | 分集样式类型 (见下文) | `SeriesStyleType` | `number_only` |
| `pageSize` | 分页加载的大小 | `number` | `10` |
| `itemWidth` | 分集 Item 的宽度 (CUSTOM 样式下生效) | `number` | `160` |
| `itemHeight` | 分集 Item 的高度 (CUSTOM 样式下生效) | `number` | `240` |
| `onLoadPageData` | 分页数据加载异步回调 | `(pageIndex, pageSize) => Promise<SeriesItemLoad[]>` | `-` |
| `seriesListName` | 为了细化焦点范围，需要指定列表名称 | `string` | `seriesListView` |
| `groupListName` | 为了细化焦点范围，需要指定分组列表名称 | `string` | `groupListView` |
| `seriesListUpName` | 为了细化焦点范围，需要指定列表向上名称 | `string` | `seriesListUpView` |
| `groupListDownName` | 为了细化焦点范围，需要指定分组列表向下名称 | `string` | `groupListDownView` |
### SeriesStyleType 样式枚举

| 枚举值 | 说明 |
| --- | --- |
| `number_only` | 纯数字（如：1, 2, 3...） |
| `text_only` | 纯文字（展示 `title` 字段） |
| `image_left_text_right` | 左图右文 |
| `image_top_text_bottom` | 上图下文 |
| `custom` | 自定义样式（需配合插槽使用） |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `item-click` | 分集被点击时触发 | `(index: number)` |
| `item-focused` | 分集获得焦点时触发 | `(index: number)` |
| `group-click` | 分组被点击时触发 | `(groupIndex, startIndex, endIndex)` |
| `group-focused` | 分组获得焦点时触发 | `(groupIndex, startIndex, endIndex)` |

### Methods (通过 ref 调用)

此处的方法只有在qt-vue-section中使用才需要，因为目前qt-vue-section中的组件监听不到外部属性值的变化，只能通过方法调用更新。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| `updateTotalEpisodes` | 动态更新总集数 | `(totalEpisodes: number, index?: number)` |
| `updateCurrentIndex` | 动态更新当前选中集数 | `(index: number)` |
| `setSelectedIndex` | 设置列表选中状态 | `(index: number)` |
