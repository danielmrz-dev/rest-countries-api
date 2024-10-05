import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  // private api = "https://restcountries.com/v3.1/all";
  private api = "https://gist.githubusercontent.com/danielmrz-dev/28e50600a1f1bb2d23970b1e6fa6ca2b/raw/1477539ac939369d2b6d57c9f85cc779caaf82b6/countries.txt";

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.api);
  }
}
