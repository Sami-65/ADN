import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdnService {
  private myAppUrl;
  private myApiUrl = 'api/Mutation/';

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.myAppUrl = baseUrl;
  }
  saveAdn(adn: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, adn);
  }
}
