import { NgModule } from '@angular/core';
import {
  RouterModule, Routes
} from '@angular/router';
import { BlogComponent } from './dashboard/blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './dashboard/landing-page/landing-page.component';
import { ResearchComponent } from './dashboard/research/research.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: 'dashboard',
    children: [
      {
        component: LandingPageComponent,
        path: 'landing',
      },
      {
        component: BlogComponent,
        path: 'blog',
      },
      {
        component: ResearchComponent,
        path: 'research',
      },
      {
        component: ResearchComponent,
        path: 'research',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard/landing',
  },
  {
    component: SignInComponent,
    path: 'sign-in',
  },
  {
    component: SignUpComponent,
    path: 'sign-up',
  },
  {
    component: NotFoundComponent,
    path: 'not-found',
  },
  {
    component: ServerErrorComponent,
    path: 'server-error',
  },
  {
    component: NotFoundComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
