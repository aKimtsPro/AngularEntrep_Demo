import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template:  " <h1> Salut </h1> ", 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngular';

  today = new Date();
}
