import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import 'styles/base/main.sass'; // Global styles
import 'styles/base/common.sass'; // Global styles
import SearchContainer from './containers/SearchContainer/SearchContainer';
import DetailsContainer from './containers/DetailsContainer/DetailsContainer';
import LayoutContainer from './containers/LayoutContainer/LayoutContainer';

export const App = props => (
  <div className="App">
    <LayoutContainer {...props}>
      <Switch>
        <Route path="/search" component={SearchContainer} />
        <Route path="/details/:itemId" component={DetailsContainer} />
        <Route component={SearchContainer} />
      </Switch>
    </LayoutContainer>
  </div>);

export default withRouter(App);
