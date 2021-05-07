import { tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
public id : number
public titulo:string
public texto:string
public date:Date
public Usuario:Usuario
public Tema:tema

}