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
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 9000000); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    },16);
}
}