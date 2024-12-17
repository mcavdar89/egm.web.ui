import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'personel/form', loadComponent: () => import('./pages/personel-form/personel-form.component').then(m => m.PersonelFormComponent) },
    { path: 'personel/list', loadComponent: () => import('./pages/personel-list/personel-list.component').then(m => m.PersonelListComponent) },
    { path: 'ziyaret/kayit/form', loadComponent: () => import('./pages/ziyaretci-kayit-form/ziyaretci-kayit-form.component').then(m => m.ZiyaretciKayitFormComponent) },
];
