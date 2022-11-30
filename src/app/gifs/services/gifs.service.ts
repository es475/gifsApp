import { HttpClient } from '@angular/common/http';
import { Injectable, LOCALE_ID } from '@angular/core';
import { Gif, SearchGifsReponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = '5f4GK2Iar6FAWapXfGnZoZ7CJ1jrY13c';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    
    return [...this._historial];
  }

  constructor( private http: HttpClient) {

   this._historial = JSON.parse(localStorage.getItem('historial')! ) || [];
  /*  if(localStorage.getItem('historial')){
    this._historial = JSON.parse(localStorage.getItem('historial')! );
   } */
  }

  buscarGifs( query: string = '' ) {

    query = query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query)){
      
      this._historial.unshift(query);
      
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http.get<SearchGifsReponse>(`http://api.giphy.com/v1/gifs/search?api_key=5f4GK2Iar6FAWapXfGnZoZ7CJ1jrY13c&q=${query}&limit=10`).
     subscribe((resp) => {
       console.log(resp.data);
       this.resultados = resp.data;
       
     });
    
  }
  /* fetch('http://api.giphy.com/v1/gifs/search?api_key=5f4GK2Iar6FAWapXfGnZoZ7CJ1jrY13c&q=gears&limit=10')
  .then( resp => {
    resp.json().then(data => console.log(data))
  }) */
}
