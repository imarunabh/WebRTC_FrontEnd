import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Replace with your actual backend URL
  private backendUrl = 'https://webrtc-springboot.onrender.com/api/hello';

  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get(this.backendUrl, { responseType: 'text' });
  }
}