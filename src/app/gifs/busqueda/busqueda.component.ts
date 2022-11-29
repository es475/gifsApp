import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent  {

  buscar(event: any) {
    console.log(event);
  }
   
}
