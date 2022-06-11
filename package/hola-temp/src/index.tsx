import { createRoot } from 'react-dom/client';
import { HashRouter, useRoutes } from 'react-router-dom';
import routes from './router';
import './index.css';

main();

function main() {
    const root = document.getElementById('root');
    createRoot(root || document.body).render(
        // React18 bug - 这个模式下会导致 useEffect执行两遍 https://github.com/facebook/react/issues/24467
        // <React.StrictMode>
        // </React.StrictMode>,
        <HashRouter>
            <App />
        </HashRouter>,
    );
}

function App() {
    return useRoutes(routes);
}
