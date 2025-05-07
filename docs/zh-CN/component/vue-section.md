---
title: VueSection
lang: zh-CN
---

# VueSection
>代表**tabs**及**waterfall**中的**版块**。不同于virtual dom的实现方式，此版块下的`dom`真实存在，因此可使用vue语法编写内容。

```vue
 <qt-tabs>
  <template v-slot:waterfall-vue-section>
    <!--v-if/o-show等语法皆可使用-->
    <div class="time-section-css">
      <span v-if="show" class="time-section-text-css">18</span>
      <span v-show="show" class="time-section-text-css">:</span>
      <span class="time-section-text-css">24</span>
    </div>
  </template>
</qt-tabs>
```


## API

### Slots

| name    | description        |
| ------- | ------------------ |
| default | Vue板块内容          |
