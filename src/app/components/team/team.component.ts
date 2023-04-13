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
        social: 'linkedin'
    },
    {
        name: 'Richard Otolo',
        image:'./assets/imgs/richard.webp',
        title: 'CTO',
        social: 'linkedin'
    },
    {
        name: 'Purity Kimani',
        title: 'CFO',
        image:'./assets/imgs/aaron.webps',
        social: 'linkedin'
    }
]

}
