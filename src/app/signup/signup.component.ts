import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router) {}

  signup() {
    // Placeholder for signup logic, replace with actual signup logic

    // After successful signup, navigate to the desired page (e.g., dashboard)
    this.router.navigate(['']);
  }
}
