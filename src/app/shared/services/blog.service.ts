import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'https://pms.naiparq.co.ke:444/api/v2/blog/article/?company_name=Qbventures'; 
  private singleBlogUrl = 'https://pms.naiparq.co.ke:444/api/v2/blog/article/'; 

  constructor(private http: HttpClient) { }

  getBlogContent(): Observable<any> {
    return this.http.get(this.blogUrl);
  }

  getSingleBlog(blogSlug:string): Observable<any> {
    return this.http.get(this.singleBlogUrl + blogSlug);

  }
}
