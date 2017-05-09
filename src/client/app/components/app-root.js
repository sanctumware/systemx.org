import csjs from 'csjs-inject';
import Favicon from 'react-favicon';
import React from 'react';

import fonts from '../../resources/fonts';

/**
 * On client-side application initialization, inject global CSS styles into the document head.
 * WARNING: The operations taken by this function are *stateful* and *have side effects*. This
 * function should only be called once.
 */
function injectGlobalStyles() {
  /* eslint-disable no-unused-expressions */

  // Global styles
  csjs`
  * {
    margin: 0;
    outline: none;
    padding: 0;
  }
  `;

  // Font definitions
  csjs`
  @font-face {
    font-family: 'montserrat--regular';
    src: url(data:7application/x-font-otf;base64,${fonts.montserratRegular}),
         url('/static/fonts/montserrat-regular.otf');
  }

  @font-face {
    font-family: 'montserrat--ultra-light';
    src: url(data:7application/x-font-otf;base64,${fonts.montserratUltraLight}),
         url('/static/fonts/montserrat-ultra-light.otf');
  }

  @font-face {
    font-family: 'inconsolata--regular';
    src: url(data:application/x-font-ttf;base64,${fonts.inconsolataRegular}),
         url('/static/fonts/inconsolata-regular.ttf');
  }

  @font-face {
    font-family: 'inconsolata--bold';
    src: url(data:application/x-font-ttf;base64,${fonts.inconsolataBold}),
         url('/static/fonts/inconsolata-bold.ttf');
  }
  `;

  /* eslint-enable no-unused-expressions */
}

injectGlobalStyles();

/**
 * Root application component wrapping the SPA. This is a stateless component; this component should
 * only be rendered once on the client.
 *
 * @param {XML} children All children components.
 * @constructor
 */
const AppRoot = ({children}) => (
  <div className="app-root">
    <Favicon
      animated={false}
      url={['/static/img/favicon.png']}
    />
    {children}
  </div>
);

export default AppRoot;
