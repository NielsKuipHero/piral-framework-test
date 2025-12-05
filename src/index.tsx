import * as React from 'react';
import { Link } from 'react-router-dom';
// the API from the app shell is automatically fully typed
import type { PiletApi } from 'sample-piral';
// import (and add / edit / remove) styles as you want
import './style.scss';

const MyExtension = React.lazy(() => import('./MyExtension'));
const MyPage = React.lazy(() => import('./MyPage'));

export function setup(api: PiletApi) {
  // try playing around with the API provided to this pilet
  // it will be shown in your browser's concole
  console.log('In the setup', api);

  // Some APIs are specialized for certain things on the screen
  api.registerTile(() => <div>Hello from Piral!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });

  // Links etc. can just be used as you are used to from your framework, e.g., in React
  api.registerMenu(() => <Link to="/page">My Page</Link>);

  // In general any components may be registered, too - to be used anywhere
  // identified by the given "name": "my-extension"
  api.registerExtension('my-extension', MyExtension);

  // The registration of a page belongs to the core API
  api.registerPage('/page', MyPage);
}
