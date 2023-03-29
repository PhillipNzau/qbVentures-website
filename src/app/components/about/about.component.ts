import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { NewsCardComponent } from "../../shared/news-card/news-card.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [CommonModule, NavbarComponent, FooterComponent, NewsCardComponent]
})
export class AboutComponent {

}
