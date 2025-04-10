
import HomePage from '../pages/home.f7';
import Profil from '../pages/profil.f7';
import Kontak from '../pages/kontak.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/profil/',
    component: Profil,
  },
  {
    path: '/kontak/',
    component: Kontak,
  },
];

export default routes;