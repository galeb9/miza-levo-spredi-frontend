import { Routes } from '@angular/router';
import {HomeView} from "./views/home/home.view";
import {DetailsView} from "./views/details/details.view";

export const routes: Routes = [
  {path: '', component: HomeView},
  {path: 'details/:id', component: DetailsView},
];
