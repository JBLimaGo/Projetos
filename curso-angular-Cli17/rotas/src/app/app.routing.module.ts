import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./alunos/alunos.module').then((m) => m.AlunosModule),
    canActivate: [AuthGuard],
    //canActivateChild: [AlunosGuard]
    canLoad: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
