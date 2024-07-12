import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Cocktail } from '../../types/Cocktail';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  cocktail: any;

  getCocktailById(id: string): Observable<any> {
    return this.http.get(`${environment.backendBaseUrl}/cocktail/getCocktailById?id=${id}`)};

  getCocktailByAlcohol(alcohol: string) {
    this.http.get(`${environment.backendBaseUrl}/cocktail/getCocktailByAlcohol?alcohol=${alcohol}`)
    .subscribe(cocktails => {
      this.cocktail = cocktails;
      console.log(cocktails);
    });
    return this.cocktail;
  };

  getWikiData(title: string) {
    return this.http.get<String>(`${environment.backendBaseUrl}/wikipedia/cocktail/${title}`)
    .subscribe(text => {
      console.log(text);
    });
  };

  getChatGptResponse(prompt: string) {
    return this.http.get<String>(`${environment.backendBaseUrl}/chatgpt?prompt=${prompt}`)
    .subscribe(text => {
      console.log(text);
    });
  }
}
