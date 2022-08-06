import config from '~/config';
// Layout
import { AuthLayout } from '~/Layout';

import Home from '~/pages/Home';
import Register from '~/pages/Register';
import Login from '~/pages/Login';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.register, component: Register, layout: AuthLayout },
    { path: config.routes.login, component: Login, layout: AuthLayout }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
