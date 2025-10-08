import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   title = 'product-hive-consumer';
  username :string='';
  isUserLoggedIn:boolean=false; 
  


  constructor(public authService: AuthenticationService) {  }
  
  ngOnInit() {
    // Subscribe to userName$ observable to get updates dynamically
    this.authService.userName$.subscribe((email: string) => {
      this.username = email;
      this.isUserLoggedIn = this.authService.isLoggedIn();  //check weather user is logged in
    });
  }

  handleLogout(){
    this.authService.logout();
  }

}
