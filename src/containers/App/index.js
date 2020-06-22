// @flow
import React, { Component } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { Content } from 'components';
import routes from 'constants/routes';
import Main from '../Main';

import './App.module.scss';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Content>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.main.root} component={Main} />
          </Switch>
        </BrowserRouter>
      </Content>
    );
  }
}

export default App;
