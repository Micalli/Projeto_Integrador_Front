import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: Usuario = new Usuario
  idUser: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/logar'])
      Swal.fire({
        icon: 'info',
        title: 'Ops',
        text: 'Sua sessão expirou, faça o login novamente ',
        showConfirmButton: false,
        timer: 4000
      })
      
    }
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value

  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value

  }

  atualizar(){

      this.user.tipo = this.tipoUsuario
      if(this.user.senha != this.confirmarSenha){
        Swal.fire({
          icon: 'error',
          title: 'Ops',
          text: 'As senhas não são iguais...',
          showConfirmButton: false,
          timer: 2500
        })
      }else{
        this.authService.cadastrar(this.user).subscribe((resp: Usuario)=> {
          this.user = resp
          this.router.navigate(['/inicio']) //redireciona a pagina 
          Swal.fire({
            icon: 'info',
            title: '😄',
            text: 'Usuário Atualizado com sucesso, por favor faça o login novamente.',
            showConfirmButton: false,
            timer: 2500
          })
        })
          environment.token = ''
          environment.nome = ''
          environment.foto = ''
          environment.id = 0
          this.router.navigate(['/entrar'])

      }
  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: Usuario)=>{
      this.user = resp
    })
  }

}