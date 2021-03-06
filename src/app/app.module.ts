import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TraComponent } from './components/tra/tra.component';
import { ThsrComponent } from './components/thsr/thsr.component';
import { SelectorComponent } from './components/selector/selector.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { AboutComponent } from './components/about/about.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    TraComponent,
    ThsrComponent,
    SelectorComponent,
    AutofocusDirective,
    AboutComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
