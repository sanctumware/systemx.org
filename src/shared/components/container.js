import React from 'react';
import Helmet from 'react-helmet';

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={'test'} />
        hello world
      </div>
    );
  }
}
