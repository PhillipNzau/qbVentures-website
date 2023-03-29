import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from 'src/app/shared/news-card/news-card.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, NewsCardComponent, FooterComponent]
})
export class HomeComponent {

}
