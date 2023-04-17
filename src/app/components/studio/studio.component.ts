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
    @ViewChild('servSwiper', { static: false }) servSwiper?: SwiperComponent;
    isMenuOpen:boolean = false;
   

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

    services = [
        {
            title: 'Testing with customers',
            description: 'Understanding your customers is the key ingredient to success for any startup as it ensures product-market fit. This is why we advocate for the Genchi Genbutsu principle. With this, we facilitate entrepreneurs enrolled in our program in having direct conversations with their potential customers in a bid to help them understand and single out the most important needs. We have up to 44 proven experiments that entrepreneurs can use singly or in combinations to test our concepts, features or entire products.'
        },
        {
            title: 'Building the right team',
            description: "A common trait of all successful startups is their strength in the composition of their founding team. This is the sole reason why we do a thorough evaluation of the team's capabilities and experiences in our startup onboarding process. We however understand that getting the right team is not always easy and that is why we have a pool of talent should you wish to hire."
        },
        {
            title: 'Recruiting advisors',
            description: "Success stories always feature advisors and mentors whose roles are to give guidance away from common pitfalls. This is especially important in entrepreneurship as waiting to learn from one's own experiences can lead to expensive failures."
        },
        {
            title: 'Business model strategies',
            description: "The world is moving at a high fast pace and entrepreneurs need to move faster in order for them to avoid being disrupted while at the same time ensuring longevity of their startups. We use our experience in helping entrepreneurs craft sustainable and superior business models."
        },
        {
            title: 'Customer development',
            description: "Digitisation has brought immense change to how customers find and consume products. We take a specialised approach to customer development and help entrepreneurs implement proven strategies in customer development."
        },
        {
            title: 'Funding options',
            description: "We connect entrepreneurs to investors! But prior to that we demystify aspects that are rather complex by simplifying and helping the entrepreneurs understand and adequately prepare for investments. This creates trust in the process and a shared understanding of each parties expectations thus allowing the entrepreneurs to put more focus in maximising in on investments and creating value."
        },
    ]

    slideNext(){        
      this.swiper?.swiperRef.slideNext(100);
    }
    slidePrev(){
      this.swiper?.swiperRef.slidePrev(100);
    }
    // Services sliders
    servSlideNext(){        
        this.servSwiper?.swiperRef.slideNext(100);
      }
    servSlidePrev(){
       this.servSwiper?.swiperRef.slidePrev(100);
     }
      
}
