import React from 'react';
import Routes from '../../containers/Router';
import bem from '../../lib/bem';
import './style.css';

const block = 'app';

export class App extends React.Component {
  render() {
    return (
      <div className={bem({ block })}>
        <Routes />
      </div>
    );
  }
}
