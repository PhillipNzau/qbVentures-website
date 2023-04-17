import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { TeamCardComponent } from "../../shared/team-card/team-card.component";

@Component({
    selector: 'app-team',
    standalone: true,
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    imports: [CommonModule, NavbarComponent, FooterComponent, TeamCardComponent]
})
export class TeamComponent {
    team = [
        {
            name: 'Aaron Nzau',
            title: 'Founder and CEO',
            image:'./assets/imgs/aaron.webp',
            social: 'https://www.linkedin.com/in/aaron-nzau-07655547/'
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
