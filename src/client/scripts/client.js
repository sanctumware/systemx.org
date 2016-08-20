/* global document */

import App from '../../shared';
import {render} from 'react-dom';

render(new App().render(), document.getElementById('app'));
