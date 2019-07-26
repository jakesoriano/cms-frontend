import { Injectable } from '@angular/core';
import { API_URL } from '../../constants'
import { WEB as ENDPOINT } from '../../constants'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebViewsService {
  public data: BehaviorSubject<String[]> = new BehaviorSubject<String[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  get () {
    return this.http.get(API_URL + ENDPOINT)
  }

  getBySlug (slug) {
    return this.http.get(API_URL + ENDPOINT + slug)
  }
}
