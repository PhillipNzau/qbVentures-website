import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-studio',
    standalone: true,
    templateUrl: './studio.component.html',
    styleUrls: ['./studio.component.scss'],
    imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink, RouterLinkActive]
})
export class StudioComponent {

}
