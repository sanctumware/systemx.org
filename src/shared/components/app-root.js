import React from 'react';

import Splash from './layout/splash';

const AppRoot = ({children}) => (
  <div className="app-root">
    <Splash />
    {children}
  </div>
);

export default AppRoot;
