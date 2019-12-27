import React, { Component, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import PermissionRoute from './routes/PermissionRoute';
// import Loading from './components/basic/Loading';
// import Routes from './routes';
// import './styles/normalize.scss';
// import './styles/theme.less';
// import './styles/common.scss';
// import Config from '@root/config/config.user.js';
import Home from '@src/page/demo_home';
import Details from '@src/page/demo_details';

class App extends Component {
  render() {
    console.log('props: ', this.props);
    return (
      <Router>
        <Switch>
          <Route path="/demo/spa/details/:id" render={props => {
            return <Details
              {...this.props}
              {...props}
            />;
          }} />
          <Route path="/demo/spa" render={props => {
            return <Home
              {...this.props}
              {...props}
            />;
          }} />
        </Switch>
      </Router>
    );
    // return (
    //   <Router basename="">
    //     <Suspense fallback={<Loading full={true} />}>
    //       <Switch>
    //         <Route path="/demo/spa/" component={Home} />
    //       </Switch>
    //     </Suspense>
    //   </Router>
    // );
  }
}

export default App;
