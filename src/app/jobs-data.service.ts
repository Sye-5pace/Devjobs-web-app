import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobsData } from './interface'

@Injectable({
  providedIn: 'root'
})


export class JobsDataService {
  private jsonUrl = '../assets/data.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<JobsData[]> {
    return this.http.get<JobsData[]>(this.jsonUrl)
  }
}
