import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';


const routes: Routes = [
    { path: 'cursos', component: CursosComponent},
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent}
];

export const routerConfig: ModuleWithProviders<RouterModule>  = RouterModule.forRoot(routes);