import config from "~/config";

import Home from "~/pages/Home";
import Account from "~/pages/Account";
import Notfound from "~/pages/Notfound";
import ProductDetail from "~/pages/ProductDetail";
import Profile from "~/pages/Profile";
import Cart from "~/pages/Cart";


const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.account, component: Account},
    {path: config.routes.notfound, component: Notfound},
    {path: config.routes.detail, component: ProductDetail},
    {path: config.routes.profile, component: Profile},
    {path: config.routes.cart, component: Cart}
]

const privateRoutes = []

export {publicRoutes, privateRoutes}