import React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './app.less';

const root = document.getElementById('root');

const App = () => (
    <div className={styles.welcomeWrap}>
        <h1>Hola</h1>
        <p>no amount of money ever bought a second of time.</p>
        <p>寸金难买寸光阴</p>
    </div>
);

createRoot(root!).render(<App />);
