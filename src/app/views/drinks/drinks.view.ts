import { Component } from '@angular/core';
import {CocktailService} from "../../services/cocktail.service";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './drinks.view.html',
  styleUrl: './drinks.view.css'
})
export class DrinksView {
  drink:any = "";
  drinks: any = [];

  constructor(private cocktailService: CocktailService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.param =  window.location.href.split("/").pop()
    this.drink = this.route.snapshot.params['alcohol']
    this.cocktailService.getCocktails(this.drink).subscribe(
      (data:any) => {
        this.drinks = data;
      },
      (error: any) => {
        console.log(error)
      }
    );

  }
}
