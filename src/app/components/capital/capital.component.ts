import { Component, OnInit } from '@angular/core';
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
export class CapitalComponent implements OnInit {
    items: number[] = [1,2,3,4,5,6,7,8,10,11,2,45,4,8,9,8,79,7];

    // Fetch all the details element.
    details:any

    ngOnInit() {
        this.details = document.querySelectorAll("details");
        // Add the onclick listeners.
        this.details.forEach((targetDetail:any) => {            
            targetDetail.addEventListener("click", () => {
            // Close all the details that are not targetDetail.
            this.details.forEach((detail:any) => {
                if (detail !== targetDetail) {
                detail.removeAttribute("open");
                }
            });
            });
        });
    }


}
