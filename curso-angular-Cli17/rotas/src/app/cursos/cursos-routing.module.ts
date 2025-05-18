import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  { path: '', component: CursosComponent }, // Rota padrão para cursos
  { path: ':id', component: CursoDetalheComponent }, // Rota para detalhes do curso
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent }, // Rota para curso não encontrado
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}