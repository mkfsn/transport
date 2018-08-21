import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraComponent } from './components/tra/tra.component';
import { ThsrComponent } from './components/thsr/thsr.component';

const routes: Routes = [
  { path: 'tra', component: TraComponent },
  { path: 'thsr', component: ThsrComponent },
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
