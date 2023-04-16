import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { NewsCardComponent } from "../../shared/news-card/news-card.component";
import { TeamCardComponent } from "../../shared/team-card/team-card.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [CommonModule, NavbarComponent, FooterComponent, NewsCardComponent, TeamCardComponent]
})
export class AboutComponent {
    team = [
        {
            name: 'Aaron Nzau',
            title: 'Founder and CEO',
            image:'./assets/imgs/aaron.webp',
            social: 'linkedin'
        },
        {
            name: 'Richard Otolo',
            image:'./assets/imgs/richard.webp',
            title: 'CTO',
            social: 'https://www.linkedin.com/in/richard-assanga-otolo/'
        },
        {
            name: 'Purity Kimani',
            title: 'CFO',
            image:'./assets/imgs/purity.webp',
            social: 'https://www.linkedin.com/in/purity-k-111166a4'
        }
    ]

}
