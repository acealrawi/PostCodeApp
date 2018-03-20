import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from './MatModule/mat.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServicesModule } from './Services/services.module';
import { PostCodeService } from './Services/postCode.service';
import { PostCodeComponent } from './PostCode/postCode.component';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './googleMap/googleMap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PostCodeComponent,
    GoogleMapComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBM9rH88vRhSdHYBnwEBcppAT_NRUZcMA0'
    }),
    RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
