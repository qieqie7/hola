import React from 'react';

interface Test {
  a: string;
}

const t: Test = {
  a: 'test test',
};

const A2 = () => <h1>{t.a}</h1>;

export default A2;
