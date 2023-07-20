import { Component } from "@angular/core";

@Component({
    selector:'app-personas',
    templateUrl:'./personas.component.html',
    styleUrls: ['./personas.component.css']
})

export class PersonasComponent{
    deshabilitar = false;
    
    mensaje = 'No se ha agregado ninguna Persona'
    agregarPersona(){
        this.mensaje = 'Persona Agregada'
    }

}