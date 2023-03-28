import { Route } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CapitalComponent } from "./capital/capital.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { StudioComponent } from "./studio/studio.component";
import { TeamComponent } from "./team/team.component";

export const COMPONENTS_ROUTES: Route[] = [
    {path: '', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'studio', component:StudioComponent},
    {path:'capital', component:CapitalComponent},
    {path: 'team', component:TeamComponent},
    {path: 'contact', component: ContactComponent}
    
]