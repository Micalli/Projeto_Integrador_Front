import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './detele/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LinhaTempoComponent } from './linha-tempo/linha-tempo.component';
import { LogarComponent } from './logar/logar.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
{path:'',redirectTo:'inicio',pathMatch:'full'},

  {path:'logar',component:LogarComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'inicio',component:InicioComponent},
  {path:'linha-tempo',component:LinhaTempoComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:idPostagem', component: PostagemEditComponent},
  {path: 'postagem-delete/:idPostagem', component: PostagemDeleteComponent},
  {path: 'user-edit/:id',component:UserEditComponent}

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
