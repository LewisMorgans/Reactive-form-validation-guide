import { Routes } from '@angular/router';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';
import { ThankyouComponent } from './pages/thankyou-page/thankyou.component';

export const routeEngine: Routes = [
    { path: 'feedback', component: FeedbackPageComponent },
    { path: 'thankyou', component: ThankyouComponent }
];