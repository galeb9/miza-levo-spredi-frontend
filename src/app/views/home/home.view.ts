import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.view.html',
  styleUrl: './home.view.css'
})
export class HomeView {
  alcholTypes: any = [
    "vodka",
    "gin",
    "rum"
  ]

}
