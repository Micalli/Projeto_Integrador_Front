import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
public idPostagem : number
public publicacao:string
public evento:string
public comunidade: string
public date: Date
public usuarioPublicador:Usuario
public tema:Tema

}