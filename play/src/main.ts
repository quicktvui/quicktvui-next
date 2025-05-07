import {ESApp} from '@extscreen/es3-vue'
import application from './App.vue'

import routes from './routes'

import './views/css/es-sdk-css.css';
import './views/css/quick-ui-css.css';
import './components/qt-seek-bar/css/qt-seek-bar-css.css';

const routerOptions = {
  main: 'splash',
  error: 'error',
  limit: 10,
  routes: routes
}
import { createESRouter, Router } from '@extscreen/es3-router'
const router: Router = createESRouter(routerOptions)

import {createESApp} from '@extscreen/es3-core'

const app: ESApp = createESApp(application, router)
console.log("----vue version-------+++>>>>", app.version)

import {install} from './components';

app.use(install);

//
import { ESComponent } from '@extscreen/es3-component'
app.use(ESComponent)

// 自定义样式需要，注释掉 css 引入
import 'quicktvui/dist/index.css'

// 引入组件库
import QuickTVUI from 'quicktvui'

app.use(QuickTVUI)
