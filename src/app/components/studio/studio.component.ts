import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { SwiperComponent } from "swiper/angular";

@Component({
    selector: 'app-studio',
    standalone: true,
    templateUrl: './studio.component.html',
    styleUrls: ['./studio.component.scss'],
    imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink, RouterLinkActive, SwiperModule]
})
export class StudioComponent {
    @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

    quotes = [
        {
            title: 'Scale your startup',
            description: 'We assure you a positive theory of change by imparting our accumulated knowledge in entrepreneurship and venture development to entrepreneurs, so that they can disrupt their industries.'
        },
        {
            title: 'Meet world class mentors',
            description: 'By providing you with in-person linkage to mentors, we provide you with an opportunity to validate your idea and use lessons from first-hand experiences to dodge pitfalls in your venture building journey.'
        },
        {
            title: 'Proven GTM strategies',
            description: 'We partner you with experienced marketing strategists who then use their combined knowledge to give you guidance and boost your chances of success.'
        },
        {
            title: 'Build your team',
            description: 'We understand the importance of having the right team and that is why we evaluate your team’s capabilities and advise you on filling missing links. We can also help you source for experts from our talent pool.'
        }
    ];

    slideNext(){        
      this.swiper?.swiperRef.slideNext(100);
    }
    slidePrev(){
      this.swiper?.swiperRef.slidePrev(100);
    }
      
}
