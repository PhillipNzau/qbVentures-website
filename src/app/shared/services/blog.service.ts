import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'https://pms.naiparq.co.ke:444/api/v2/blog/article/?company_name=qbventures'; 

  constructor(private http: HttpClient) { }

  getBlogContent(): Observable<any> {
    return this.http.get(this.blogUrl);
  }
}
