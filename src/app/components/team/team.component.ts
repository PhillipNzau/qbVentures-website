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
  items:number[]=[1,2,1,2,1,2,12,1,2,1,2,1,21]

}
