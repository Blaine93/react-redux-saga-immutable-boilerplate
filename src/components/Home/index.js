import React from 'react';
import bem from '../../lib/bem';
import './style.css';

const block = 'home';

export class HomeComponent extends React.Component {
  render() {
    return (
      <div className={bem({ block })}>
        Home page
      </div>
    );
  }
}
