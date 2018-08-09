import requireContextGetModules from '../utils/requireContextGetModules'

export default requireContextGetModules(require.context('./module', false, /\.js$/), 'ARRAY')
