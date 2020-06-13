import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';
import { RouterModule } from '@angular/router'
import { routeEngine } from './routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { ThankyouComponent } from './pages/thankyou-page/thankyou.component'

@NgModule({
  declarations: [
    AppComponent,
    FeedbackPageComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeEngine)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
