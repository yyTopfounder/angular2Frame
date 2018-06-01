import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rootPage: any = HomeComponent;
}
