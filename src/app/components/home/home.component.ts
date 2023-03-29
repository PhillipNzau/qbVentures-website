import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from 'src/app/shared/news-card/news-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
