import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent   {

  heroes: string[] =['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string ='';


  borrarHeroe (){

    this.heroeBorrado = this.heroes.shift() || '';
    

    
  }
}
