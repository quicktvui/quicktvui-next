<template>
  <div class='es-sdk-root-css' :clipChildren='false'>
    <qt-container>
      <qt-aside>
        <span class='container-name-css'>Aside</span>
      </qt-aside>
      <qt-container>
        <qt-header>
          <span class='container-name-css'>Header</span>
        </qt-header>
        <qt-main>
          <span class='container-name-css'>Main</span>
        </qt-main>
        <qt-footer>
          <span class='container-name-css'>Footer</span>
        </qt-footer>
      </qt-container>
    </qt-container>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'QTContainer-AHMF',
  emits: [],
  setup() {
    return {}
  }
})
</script>

<style>

.qt-header {
  background-color: #c7e2fe;
}

.qt-main {
  background-color: #ecf5ff;
}

.qt-aside {
  background-color: #daecfe;
}


.qt-footer {
  background-color: #c7e2fe;
}

.container-name-css {
  color: black;
  font-size: 30px;
}

</style>
