import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatMenuModule, MatIconModule, MatExpansionModule} from '@angular/material';
import { ThirdComponent } from './third/third.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

const appRoutes: Routes = [
  { path: '', component: SecondComponent},
  { path: 'third', component: ThirdComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    NgxUsefulSwiperModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
