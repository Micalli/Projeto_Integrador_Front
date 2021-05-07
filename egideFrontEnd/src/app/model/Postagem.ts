import { tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
public idPostagem : number
public publicacao:string
public evento:string
public date:Date
public usuarioPublicador:Usuario
public Tema:tema

}