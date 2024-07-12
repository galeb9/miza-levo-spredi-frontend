import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { CommonModule, KeyValue } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.view.html',
  styleUrl: './details.view.css'
})
export class DetailsView implements OnInit{
  @Input()
  id: string;

  constructor(private cocktailService: CocktailService) {}
  
  cocktail: any;
  wiki : any;

  ngOnInit(): void {

      this.cocktailService.getCocktailById("17105").subscribe(data => {
        this.cocktail = data;
        console.log(data);
        this.wiki = this.getWiki(data.name);
      });
      
  }

  getWiki(searchString: String) {
    return null;
  }

  valueAscOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.value.localeCompare(b.value);
  }
}
