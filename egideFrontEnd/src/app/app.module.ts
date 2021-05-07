import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http'

=======
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
>>>>>>> 7ace2bcdc59320628b5e498ead6b3d27c3637d3d
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogarComponent } from './logar/logar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LinhaTempoComponent } from './linha-tempo/linha-tempo.component';

@NgModule({
  declarations: [
    AppComponent,
    LogarComponent,
    CadastrarComponent,
    InicioComponent,
    LinhaTempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
=======
    FormsModule
>>>>>>> 7ace2bcdc59320628b5e498ead6b3d27c3637d3d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
