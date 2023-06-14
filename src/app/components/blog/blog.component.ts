import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { BlogService } from 'src/app/shared/services/blog.service';
import { blog } from 'src/app/shared/models/blogModel';





@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  isMenuOpen:boolean = false;

  qbBlogs: blog[] = [];

  constructor(private blogService: BlogService){}

  ngOnInit(): void {
    this.blogService.getBlogContent().subscribe({
      next: (blogs) => {
        this.qbBlogs = blogs.results
        console.log('the blogs', blogs.results);
        
      },
      error: (err)=> {
        console.error('Error getting blogs', err);
        
      }
    })
    
  }
}
