import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktailById(id: string) {
    return this.http.get(`${environment.backendBaseUrl}/cocktail/getCocktailById?id=${id}`).subscribe(config => {
      console.log(config);
    });
  };

  
}
