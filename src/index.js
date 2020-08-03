import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Store from './State/State';

export const rerender = () => {ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App State={Store.getState()} 
      Dispatch={Store.dispatch.bind(Store)}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
}

rerender()
Store.subscribe(rerender)

serviceWorker.unregister();
