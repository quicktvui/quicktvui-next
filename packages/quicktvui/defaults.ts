import { makeInstaller } from './make-installer'
import Components from './component'
import Plugins from './plugin'
import Elements from './element'

export default makeInstaller([...Elements, ...Components, ...Plugins])
