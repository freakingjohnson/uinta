// @flow strict
import * as React from 'react';
import { withRouter } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import router from './router'

class App extends React.Component<{}, {}> {
  state = {}
  render(): React.Element<'div'> {
    return (
      <div className="App">
        <Navbar />
        {router}
      </div>
    );
  }
}


export default withRouter(App);
