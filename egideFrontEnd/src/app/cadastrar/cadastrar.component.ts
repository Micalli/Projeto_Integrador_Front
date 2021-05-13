
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
 
  usuario:Usuario = new Usuario
  confirmarSenha:string
  tipoUsuario:string
 

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(
   ) {
    window.scroll(0,0)
  }
 confirmSenha(event:any){
  this.confirmarSenha=event.target.value
 }
 tipoUser(event:any){
  this.tipoUsuario=event.target.value
 }
 cadastrar(){
   this.usuario.tipo=this.tipoUsuario
   if(this.usuario.senha!=this.confirmarSenha){
    Swal.fire({
      icon: 'error',
      title: 'Ocorreu um erro',
      text: 'As senhas não conferem',
      showConfirmButton: false,
      timer: 2000
    })
   }
else{
   this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
     this.usuario=resp
     this.router.navigate(['/logar'])
     alert ('usuario cadastrado com sucesso.')
   })

  }
 }
}
