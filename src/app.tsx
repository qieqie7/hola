import React from 'react';
import ReactDom from 'react-dom';
import A1 from './A1';
import A2 from './A2';

const root = document.getElementById('root');

export const start = () =>
  ReactDom.render(
    <div>
      <A1 />
      <A2 />
    </div>,
    root,
  );
