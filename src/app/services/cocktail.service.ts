import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktailById(id: string) {
    return this.http.get(`${environment.backendBaseUrl}/cocktail/getCocktailById?id=${id}`)
    .subscribe(cocktail => {
      console.log(cocktail);
    });
  };

  getCocktailByAlcohol(alcohol: string) {
    return this.http.get(`${environment.backendBaseUrl}/cocktail/getCocktailByAlcohol?alcohol=${alcohol}`)
    .subscribe(cocktails => {
      console.log(cocktails);
    });
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
