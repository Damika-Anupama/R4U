import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent {
  constructor(private router:Router) { }
  goToHome():void {
    this.router.navigateByUrl("/dashboard/landing");
  }
}
