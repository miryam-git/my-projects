 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getUserDetails(firstName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/get-details?firstname=${firstName}`);
  }}