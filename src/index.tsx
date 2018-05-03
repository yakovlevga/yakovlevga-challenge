import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename='/apple'>        
    <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
