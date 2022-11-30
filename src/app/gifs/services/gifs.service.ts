import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = '5f4GK2Iar6FAWapXfGnZoZ7CJ1jrY13c';
  private _historial: string[] = [];

  public resultados: any[] = [];

  get historial() {
    
    return [...this._historial];
  }

  constructor( private http: HttpClient) {}

  buscarGifs( query: string = '' ) {

    query = query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query)){
      
      this._historial.unshift(query);
      
      this._historial = this._historial.splice(0,10);
    }

    this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=5f4GK2Iar6FAWapXfGnZoZ7CJ1jrY13c&q=${query}&limit=10`).
     subscribe((resp:any) => {
       console.log(resp.data);
       this.resultados = resp.data;
     });
    
  }
  /* fetch('http://api.giphy.com/v1/gifs/search?api_key=5f4GK2Iar6FAWapXfGnZoZ7CJ1jrY13c&q=gears&limit=10')
  .then( resp => {
    resp.json().then(data => console.log(data))
  }) */
}
