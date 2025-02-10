import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faDashboard, faUserCog } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router:Router) {}

  open: boolean = false;
  title = 'Menu';
  faBars = faBars
  faDashboard = faDashboard
  faUserCog = faUserCog

  toggleMenu() {
    this.open = !this.open
  }

  linkAction() {
    console.log("url pressed");
    // this.router.navigate(['/url'])
    
  }
}

