
import HomePage from '../pages/home.f7';
import Profil from '../pages/profil.f7';
import Kontak from '../pages/kontak.f7';

import Matematika from '../pages/matematika.f7';
import Diskon from '../pages/diskon.f7';

import TambahPage from '../pages/tambah.f7';
import EditPage from '../pages/edit.f7';

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
  {
    path: '/tpegawai/',
    component: TambahPage,
  },
  {
    path: '/edit/:id/',
    component: EditPage,
  },
];

export default routes;