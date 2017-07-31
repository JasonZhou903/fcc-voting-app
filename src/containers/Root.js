import React, { PureComponent } from 'react'
import { object } from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import 'semantic-ui-css/semantic.min.css'

import * as actions from '../actions'
import Home from './HomePage'
import SignIn from './SignInPage'
import SignUp from './SignUpPage'
import Logout from './LogoutPage'

class Root extends PureComponent {
  static propTypes = {
    store: object.isRequired,
    history: object.isRequired,
  }

  componentDidMount() {
    const { store } = this.props

    store.dispatch(actions.fetchUser())
  }

  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={SignIn} />
            <Route path="/join" component={SignUp} />
            <Route path="/logout" component={Logout} />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
