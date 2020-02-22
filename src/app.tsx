// TODO: polyfill 的按需加载
// import '@babel/polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import './app.less';

const root = document.getElementById('root');

const App = () => (
  <div className="welcomeWrap">
    <h1>Welcome</h1>
    <p>no amount of money ever bought a second of time.</p>
    <p>寸金难买寸光阴</p>
  </div>
);

ReactDom.render(<App />, root);
