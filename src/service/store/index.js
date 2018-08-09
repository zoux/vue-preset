import common from './common'
import requireContextGetModules from '../../utils/requireContextGetModules'

export default {
  ...common,
  modules: requireContextGetModules(require.context('./module', false, /\.js$/))
}
