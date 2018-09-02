import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraComponent } from './components/tra/tra.component';
import { ThsrComponent } from './components/thsr/thsr.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'tra', component: TraComponent },
  { path: 'thsr', component: ThsrComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
