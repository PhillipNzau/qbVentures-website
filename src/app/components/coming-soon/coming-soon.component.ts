import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-coming-soon',
    standalone: true,
    templateUrl: './coming-soon.component.html',
    styleUrls: ['./coming-soon.component.scss'],
    imports: [CommonModule, NavbarComponent, FooterComponent]
})
export class ComingSoonComponent {

}
