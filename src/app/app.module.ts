import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http'

const myRoute:Routes=[
  {
    path:"",
    component:ViewComponent
  },
  {
    path:"add",
    component:AddComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
