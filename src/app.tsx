import React from 'react';
import ReactDom from 'react-dom';

const root = document.getElementById('root');

export const start = () => ReactDom.render(<div>i from react</div>, root);
// export const start = () => console.log(123);
