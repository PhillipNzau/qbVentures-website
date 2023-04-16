import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { NewsCardComponent } from "../../shared/news-card/news-card.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-capital',
    standalone: true,
    templateUrl: './capital.component.html',
    styleUrls: ['./capital.component.scss'],
    imports: [CommonModule, NavbarComponent, NewsCardComponent, FooterComponent, RouterLink]
})
export class CapitalComponent {
    items: number[] = [1,2,3,4,5,6,7,8,10,11,2,45,4,8,9,8,79,7];

}
