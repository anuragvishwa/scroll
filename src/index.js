import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Fab } from './Fab'
import { AppRouter } from './router'
import * as ServiceWorker from './serviceWorker'

ReactDOM.render(<AppRouter />, document.getElementById('root'))
ReactDOM.render(<Fab />, document.getElementById('fab'))

ServiceWorker.register()
