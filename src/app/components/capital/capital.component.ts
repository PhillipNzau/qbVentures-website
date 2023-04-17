import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { NewsCardComponent } from "../../shared/news-card/news-card.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { SwiperComponent } from "swiper/angular";

@Component({
    selector: 'app-capital',
    standalone: true,
    templateUrl: './capital.component.html',
    styleUrls: ['./capital.component.scss'],
    imports: [CommonModule, NavbarComponent, NewsCardComponent, FooterComponent, RouterLink, SwiperModule]
})
export class CapitalComponent implements OnInit {
    @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

    items: number[] = [1,2,3,4,5,6,7,8,10,11,2,45,4,8,9,8,79,7];
    testimonies = [
        {
            title: "Founder Prodtrace",
            name: "Victor Kanam",
            image:'',
            description: "Joining Qbventures has been like plugging into a network of endless possibilities.They have been the cornerstone of our journey at ProdTrace. Being part of this dynamic Venture Studio has allowed us to tap into a wealth of knowledge, expertise, and resources that have been instrumental in turning our vision from concept to reality. With QBVentures in our corner, we're excited to continue pushing the boundaries of what's possible and create a lasting impact in our industry",            
        },
        {
            title: "Founder, Loita Telematics",
            name: "Felix Otieno",
            image:'',
            description: "The support entrepreneurs receive from QBVentures is second to none. Thanks to their venture studio model, I was able to obtain all the necessary resources to launch my startup idea. QBVentures offers a unique approach to supporting entrepreneurs, with a team of experienced professionals who provide guidance and mentorship every step of the way.",            
        },
        {
            title: "Founder, NaiparQ Technologies",
            name: "Joan Yieke",
            image:'',
            description: "I have an immense appreciation for the support I have received from qbventures in terms of resources, training and mentorship. What started as an idea is now a business delivering value to its customers.",            
        }

    ]

    // Fetch all the details element.
    details:any
    slideNext(){        
        this.swiper?.swiperRef.slideNext(100);
      }
      slidePrev(){
        this.swiper?.swiperRef.slidePrev(100);
      }

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
