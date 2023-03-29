import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from 'src/app/shared/news-card/news-card.component';
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, NewsCardComponent, NavbarComponent, FooterComponent, RouterLink, RouterLinkActive]
})
export class HomeComponent {

}
