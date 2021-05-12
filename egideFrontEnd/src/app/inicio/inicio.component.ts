import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
    //this.scroll()
    setInterval(()=> {
      //this.scroll()
    },100)
   
   
  }

  onActivate(event:any) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 3);
}
 /*scroll(){
  
  let x = <HTMLElement>document.body.querySelector(".active")
  window.addEventListener ("scroll", ()=>{
    if(window.pageYOffset > 10){
      x.classList.add("active")
    }else{
      x.classList.remove("active")
    }
  })

}*/



}
