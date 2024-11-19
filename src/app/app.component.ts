import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./pages/partials/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    HttpClient
  ]
})
export class AppComponent implements OnInit {
  title = 'angular-crud17';
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get<any>('http://localhost:8080/api/users/users')
      .subscribe(response => {
        if (response.data) {
          this.users = response.data;
        }
      });
  }
}