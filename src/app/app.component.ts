import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/test-service.service';


@Component({
  selector: 'app-root',
  template: `
    <h1>Angular + Spring Boot Test</h1>
    <button (click)="testConnection()">Test Connection</button>
    <p *ngIf="response">{{ response }}</p>
  `
})
export class AppComponent implements OnInit {
  response: string | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  testConnection() {
    this.apiService.getHello().subscribe({
      next: (res) => this.response = res,
      error: (err) => this.response = 'Error: ' + err.message
    });
  }
}