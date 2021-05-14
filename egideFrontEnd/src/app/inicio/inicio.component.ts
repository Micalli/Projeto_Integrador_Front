import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  formgroup: FormGroup

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
    
  }

  onActivate(event:any) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
}