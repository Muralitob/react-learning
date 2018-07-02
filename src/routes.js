import Home from './modules/Home'
import Login from './modules/Login'
import Regist from './modules/Regist';
import App from './App';
let NavRoutes = [
  Login,
  Regist
]
const routeConfig = [
  {
    path: '/',
    component: App,
    indexRoute: { 
      component: Home.component,
      onEnter: Home.onEnter
    },
    childRoutes: NavRoutes
  }
]
export default routeConfig