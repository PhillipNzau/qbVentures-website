import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', loadComponent:() => import('./components/home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: 'about', loadComponent:() => import('./components/about/about.component').then(mod => mod.AboutComponent)
  },
  {
    path: 'capital', loadComponent:() => import('./components/capital/capital.component').then(mod => mod.CapitalComponent)
  },
  {
    path: 'contact', loadComponent:() => import('./components/contact/contact.component').then(mod => mod.ContactComponent)
  },
  {
    path: 'studio', loadComponent:() => import('./components/studio/studio.component').then(mod => mod.StudioComponent)
  },
  {
    path: 'team', loadComponent:() => import('./components/team/team.component').then(mod => mod.TeamComponent)
  },

  {
    path: 'coming', loadComponent:() => import('./components/coming-soon/coming-soon.component').then(mod => mod.ComingSoonComponent)
  },
  {
    path: 'blog', loadComponent:()=> import('./components/blog/blog.component').then(mod => mod.BlogComponent)
  },
  
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
