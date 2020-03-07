import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Cards } from './index1'
// import { Viewpager } from './Tutorial'

// All route props (match, location and history) are available to User

export const AppRouter = function X() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={Cards} />
        {/* <Route exact path="/viewpager" component={Viewpager} /> */}
      </Switch>
    </Router>
  )
}
