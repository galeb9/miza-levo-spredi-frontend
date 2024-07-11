import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail-fe';
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    console.log(this.cocktailService.getCocktailById("15300"));
  }
}
