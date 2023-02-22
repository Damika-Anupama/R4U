import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResolveFn, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('Home');

const routes: Routes = [
  {
    component: DashboardComponent,
    path: "dashboard",
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/dashboard'
  },
  {
    component:SignInComponent,
    path:'sign-in'
  },
  {
    component:BlogComponent,
    path:'blog'
  },
  {
    component:SignUpComponent,
    path:'sign-up'
  },
  {
    component:NotFoundComponent,
    path:'not-found'
  },
  {
    component:ServerErrorComponent,
    path:'server-error'
  },
  {
    component:NotFoundComponent,
    path:'**'
  }
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`DBS Project | ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
