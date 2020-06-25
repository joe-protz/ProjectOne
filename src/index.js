import '../node_modules/normalize.css/normalize.css'
import './sass/index.scss'

import addHeaderListeners from './header';
import addSelectorListeners from './selectors'

const app = async () => {
  addHeaderListeners()
  addSelectorListeners()
}
// Load app
app()
