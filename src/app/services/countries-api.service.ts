import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  private api = "https://restcountries.com/v3.1/all"

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.api)
  }
}
