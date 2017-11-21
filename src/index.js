import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import App from './app.jsx'

OfflinePluginRuntime.install()

const main = document.createElement('main')
document.body.appendChild(main)

const renderNew = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    main
  )
}

renderNew(App)

if (module.hot)
  module.hot.accept('./app.jsx', () => renderNew(require('./app.jsx').default))
