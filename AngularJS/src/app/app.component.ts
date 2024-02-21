import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Felipe Ferreira"
  userData = {
    email: 'teste@email.com',
    login: 'Admin'
  }
  
  title = 'teoria';
}
