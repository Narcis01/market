import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { HomesListComponent } from './components/homes-list/homes-list.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { HomesDetailComponent } from './components/homes-detail/homes-detail.component';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApartmentFormComponent } from './components/apartment-form/apartment-form.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
  { path: 'search/:keyWord', component: SearchResultComponent },
  { path: 'car', component: CarListComponent },
  { path: 'apartment', component: HomesListComponent },
  { path: 'phone', component: PhoneListComponent },
  { path: 'car-info/:id', component: CarDetailComponent },
  { path: 'apartment-info/:id', component: HomesDetailComponent },
  { path: 'phone-info/:id', component: PhoneDetailComponent },
  { path: 'car-save', component: CarFormComponent },
  { path: 'apartment-save', component: ApartmentFormComponent },
  { path: 'phone-save', component: PhoneFormComponent },
  { path: '', redirectTo: 'car', pathMatch: 'full' },
  { path: '**', redirectTo: 'car', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    CarListComponent,
    HomesListComponent,
    CarDetailComponent,
    PhoneListComponent,
    HomesDetailComponent,
    PhoneDetailComponent,
    AddComponentComponent,
    CarFormComponent,
    ApartmentFormComponent,
    PhoneFormComponent,
    SearchBarComponent,
    SearchResultComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
