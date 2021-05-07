import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LinhaTempoComponent } from './linha-tempo/linha-tempo.component';
import { LogarComponent } from './logar/logar.component';

const routes: Routes = [
{path:'',redirectTo:'inicio',pathMatch:'full'},

  {path:'logar',component:LogarComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'inicio',component:InicioComponent},
  {path:'linha-tempo',component:LinhaTempoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
