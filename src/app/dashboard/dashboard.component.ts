import { Component, HostListener, ViewChild, ElementRef} from '@angular/core';
import { Router, Scroll} from '@angular/router';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('landing') landing: ElementRef | undefined;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.landing = undefined; // initialize the property
  }
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

  scrollToSection(sectionId: string): void {
    const url = this.router.createUrlTree(['/dashboard', 'landing'], {
      fragment: sectionId // Set the section's id as the URL fragment
    });
    this.router.navigateByUrl(url); // Navigate to the URL fragment in the landing component
    this.viewportScroller.scrollToPosition([0, 0]); // Scroll to the top of the page
  }
   
  
}
