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
            title: 'Founder and Managing Partner',
            image:'./assets/imgs/aaron.webp',
            social: 'https://www.linkedin.com/in/aaron-nzau-07655547/'
        },
        {
            name: 'Richard Otolo',
            image:'./assets/imgs/richard.webp',
            title: 'Chief Operations Officer (COO)',
            social: 'https://www.linkedin.com/in/richard-assanga-otolo/'
        },
        {
            name: 'Purity Kimani',
            title: 'Principal',
            image:'./assets/imgs/purity.webp',
            social: 'https://www.linkedin.com/in/purity-k-111166a4'
        },
        {
            name: 'Felix Otieno',
            title: 'Ag Innovation Manager',
            image:'./assets/imgs/felix.webp',
            social: 'https://www.linkedin.com/in/felix-otieno-nrb/'
        }
    ]

}
