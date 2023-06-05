import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-selected-blog',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './selected-blog.component.html',
  styleUrls: ['./selected-blog.component.scss']
})
export class SelectedBlogComponent {
  // isMenuOpen:boolean = false;


}
