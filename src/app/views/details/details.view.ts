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

  constructor(private cocktailService: CocktailService, private route: ActivatedRoute) {}

  cocktail: any;
  wiki : any;

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.cocktailService.getCocktailById(this.id).subscribe(data => {
        this.cocktail = data;
        console.log(data);
        this.getWiki(data.name);
      });
      
  }

  getWiki(searchString: string) {
    this.cocktailService.getWikiData(searchString).subscribe(data => {
      if (data) {
        this.wiki = data;
      } else {
        this.wiki = {};
      }
      console.log(data);
    });
  }

  valueAscOrder = (a: KeyValue<string,string>, b: KeyValue<string,string>): number => {
    return a.key.localeCompare(b.key);
  }
}
