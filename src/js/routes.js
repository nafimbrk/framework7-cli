
import HomePage from '../pages/home.f7';
import Profil from '../pages/profil.f7';
import Kontak from '../pages/kontak.f7';

import Matematika from '../pages/matematika.f7';
import Diskon from '../pages/diskon.f7';

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
  {
    path: '/matematika/',
    component: Matematika,
  },
  {
    path: '/diskon/',
    component: Diskon,
  },
];

export default routes;