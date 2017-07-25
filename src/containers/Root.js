import React from 'react'
import { object } from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import 'semantic-ui-css/semantic.min.css'

import Home from './HomePage'
import SignIn from './SignInPage'

const Root = ({ store, history }) =>
  (
    <Provider store={store}>
      {/* ConnectedRouter will use the store from Provider automatically */}
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
        </div>
      </ConnectedRouter>
    </Provider>
  )

Root.propTypes = {
  store: object.isRequired,
  history: object.isRequired,
}

export default Root
