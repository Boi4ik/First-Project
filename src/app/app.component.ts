import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  template: `<div>
                    <router-outlet></router-outlet>
               </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
    goThird() {
        this.router.navigate(['third']);
    }

}
