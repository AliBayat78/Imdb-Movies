import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpcomingMovies } from '../../models/movies.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getUpcomingMovies(): Observable<UpcomingMovies> {
    return this.http.get<UpcomingMovies>('/assets/data/fakeData.json');
  }
}
