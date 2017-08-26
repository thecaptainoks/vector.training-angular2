import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Import of custom components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialsComponent } from './materials/materials.component';
import { MaterialComponent } from './material/material.component';
import { PageNotFoundComponent } from './page-not-found/pageNotFound.component';
import { NavComponent } from './nav/nav.component';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';

// Import the InputsModule
import { InputsModule } from '@progress/kendo-angular-inputs';

// Import GridModule
import { GridModule } from '@progress/kendo-angular-grid';

// Import DateInputsModule
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

// Import CharthsModule

import {ChartsModule} from '@progress/kendo-angular-charts';

// Import SortableModule
import { SortableModule } from '@progress/kendo-angular-sortable';


import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MaterialsComponent,
    MaterialComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'materials', component: MaterialsComponent},
      {path: '**', component: PageNotFoundComponent},
      {path: 'materials/:id', component: MaterialComponent}
    ]),

    // Register the modules
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
    GridModule,
    DateInputsModule,
    ChartsModule,
    SortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
