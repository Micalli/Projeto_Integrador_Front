import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {
  
userLogin:UserLogin= new UserLogin


  constructor(
    private router:Router,
    private auth:AuthService

    )
    
    { }

  ngOnInit(){
    window.scroll(0,0)

  }
entrar(){
 this.auth.entrar(this.userLogin).subscribe((resp:UserLogin)=>{
this.userLogin=resp
environment.token=this.userLogin.token
environment.nome=this.userLogin.nome
environment.id=this.userLogin.id
environment.foto=this.userLogin.foto

console.log(environment.token)
console.log(environment.nome)
console.log(environment.id)
console.log(environment.foto)
this.router.navigate(['/linha-tempo'])
}, erro => {
  if(erro.status == 500){
    alert('Senha ou usuario incorretos')
  }
})

}
}
