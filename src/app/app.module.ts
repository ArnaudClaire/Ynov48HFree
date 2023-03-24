import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SavComponent } from './sav/sav.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SavComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterModule.forRoot([
      {
        path: 'sav',
        component: SavComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'Support',
        component: SavComponent,
      },
      {
        path: 'signUp',
        component: SignUpComponent,
      },
      {
        path: 'signIn',
        component: SignInComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/home',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
