import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public isCollapsed = true;
  public isTopNavCollapsed = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 1) {
      this.isTopNavCollapsed = true;
    } else {
      this.isTopNavCollapsed = false;
    }
  }

  getNavbarClasses() {
    let classes = 'navbar navbar-expand-md navbar-dark navbar-custom fixed-top';
    if (this.isTopNavCollapsed) {
      classes += ' top-nav-collapse';
    }
    return classes;
  }
}
