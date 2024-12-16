import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'personel/form', loadComponent: () => import('./pages/personel-form/personel-form.component').then(m => m.PersonelFormComponent) },
];
