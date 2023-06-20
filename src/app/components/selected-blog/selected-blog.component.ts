import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-selected-blog',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './selected-blog.component.html',
  styleUrls: ['./selected-blog.component.scss']
})
export class SelectedBlogComponent implements OnInit {
  selectedBlog:any;
  blog:any;
  paragraphs: string[] = [];
  blogs = [
    {
      id: 1,
      title: `Meet the 3 New Startups in QBventures Latest Cohort, Naiparq, Loita and Prodtrace`,
      description: ``,
    },
    {
      id: 2,
      title: 'From Idea to Reality: How QBventures Studio Helps African Entrepreneurs Build Successful Startups',
      description: 'Turning an idea into a successful startup is a challenging journey, especially for African entrepreneurs who face unique opportunities and obstacles. QBventures Studio understands these challenges and is dedicated to supporting African entrepreneurs in bringing their ideas to life. With a wealth of expertise and a proven track record, QBventures Studio serves as a launchpad for innovation and a catalyst for entrepreneurial success. We will explore how QBventures Studio helps African entrepreneurs build successful startups from concept to reality.',
    },
    {
      id: 3,
      title: `Driving Innovation in Africa: QBventures Capital's Approach to Early-Stage Technology Investments`,
      description: `Innovation and technology hold immense power to transform industries and drive economic growth. At QBventures Capital, an African venture studio, we are deeply committed to investing in the region's early-stage technology startups, unlocking their potential, and fostering innovation. In this blog post, we will explore QBventures Capital's unique approach to early-stage technology investments and delve into how it contributes to the growth of the African tech ecosystem.  Identifying Disruptive Technologies: At QBventures Capital, we have developed a keen eye for disruptive technologies that possess the potential to revolutionize industries. Our team actively seeks out startups that offer innovative solutions and demonstrate a clear market fit. By identifying and investing in these disruptive technologies, QBventures Capital plays a vital role in shaping the future of African industries, paving the way for transformative advancements.  Supporting Visionary Founders: We firmly believe that the success of a startup hinges on the vision and capabilities of its founders. That's why we actively seek out visionary entrepreneurs who are passionate about their ideas and possess the drive to execute their plans successfully. At QBventures Capital, we provide comprehensive support, including mentorship, guidance, and access to valuable resources, empowering these founders to navigate the challenges of building a successful technology startup.  Strategic Investments in Early Stages: Our focus at QBventures Capital lies in early-stage investments, particularly in the pre-seed and seed stages. By getting involved at this critical juncture, we can provide startups with the necessary capital to fuel their growth and development. Our strategic investments help startups overcome initial hurdles, establish a strong foundation, and position themselves for long-term success in the market.  Building a Diverse Portfolio: We recognize the importance of diversity in our investment portfolio at QBventures Capital. We actively seek out startups from various sectors, including fintech, healthtech, agritech, proptech, logistics, and more. This diverse portfolio enables QBventures Capital to contribute to the growth and development of multiple industries in Africa, fostering a dynamic and thriving entrepreneurial ecosystem.  Long-Term Partnership and Value Creation: QBventures Capital goes beyond providing financial support to startups; we aim to build long-term partnerships with our portfolio companies. We understand that sustained success requires ongoing support and guidance. Through our extensive network of industry experts, we provide invaluable mentorship and facilitate access to resources that fuel innovation, collaboration, and value creation for both the startups and the broader tech ecosystem.  Contributing to the African Tech Ecosystem: Our investments at QBventures Capital play a crucial role in the development of the African tech ecosystem. By supporting early-stage startups, we help create a vibrant environment for innovation and entrepreneurship. Our investments contribute to job creation, economic growth, and the overall advancement of technology in Africa, driving the continent forward as a hub of innovation and opportunity.  QBventures Capital's approach to early-stage technology investments underscores our unwavering commitment to investing in innovation and driving the growth of the African tech ecosystem. Through our focus on identifying disruptive technologies, supporting visionary founders, making strategic investments, building a diverse portfolio, fostering long-term partnerships, and contributing to the African tech ecosystem, QBventures Capital stands at the forefront of fueling innovation and shaping the future of technology in Africa.  If you are an African tech startup with a transformative idea, we invite you to explore the potential of partnering with QBventures Capital. Stay tuned to our newsletter for updates on the latest investment opportunities, industry insights, and success stories from our dynamic portfolio of startups. Together, let's embrace the power of innovation, invest in the future, and create a brighter technological landscape in Africa.`,
    },
    
  ]

  constructor(
    private route:ActivatedRoute,
     private blogService: BlogService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params)=> {
        const id = params.get('id');
        this.blog = this.blogs.find((blog) => {return blog.id.toString() === id });
        this.splitIntoParagraphs()
               
      },
      error:(err) => {console.log(err);
      }
    })
    
  }
  splitIntoParagraphs() {
    this.paragraphs = this.blog.description.split('  ');
  }


}
