import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'src/assets/content/blog.md'; 

  constructor(private http: HttpClient) { }

  getBlogContent(): Observable<string> {
    return this.http.get(this.blogUrl, { responseType: 'text' });
  }
}
