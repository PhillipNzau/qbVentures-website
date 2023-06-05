import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';





@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  isMenuOpen:boolean = false;
  blogFilePath = 'src/assets/content/blog.md'
  parsedContent: string | any;

  blogs = [
    {
      id: 1,
      title: `meet the 3 new startups on QB's latest cohort`,
      description: 'QBventures, a venture studio focused on supporting and empowering promising and innovative startups, is thrilled to introduce its latest cohort of three exciting new startups.  These startups are Naiparq, Loita, and Prodtrace, and they are all set to make a significant impact in their respective industries.',
    },
    {
      id: 2,
      title: 'From Idea to reality',
      description: 'Turning an idea into a successful startup is a challenging journey, especially for African entrepreneurs who face unique opportunities and obstacles. QBventures Studio understands these challenges and is dedicated to supporting African entrepreneurs in bringing their ideas to life. With a wealth of expertise and a proven track record, QBventures Studio serves as a launchpad for innovation and a catalyst for entrepreneurial success. We will explore how QBventures Studio helps African entrepreneurs build successful startups from concept to reality.',
    },
    {
      id: 3,
      title: `Driving innovation to Africa`,
      description: `Innovation and technology hold immense power to transform industries and drive economic growth. At QBventures Capital, an African venture studio, we are deeply committed to investing in the region's early-stage technology startups, unlocking their potential, and fostering innovation. In this blog post, we will explore QBventures Capital's unique approach to early-stage technology investments and delve into how it contributes to the growth of the African tech ecosystem.`,
    }, 
  ]
}
