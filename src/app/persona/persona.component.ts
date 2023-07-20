import { Component } from '@angular/core';

@Component({
  selector: 'app-persona', 
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
      
    nombre: string = 'emilio';
    apellido: string = 'Zallocco';
    edad:number = 25;
    //private edad: number = 20;

    /*getEdad(){
      return this.edad;
    }*/


}
