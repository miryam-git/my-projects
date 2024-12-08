import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule], 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  firstName: string = '';
  userDetails: any = null;
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  fetchUserDetails() {
    //console.log('Sending request for firstName:', this.firstName);
    this.userService.getUserDetails(this.firstName).subscribe(
      (response) => {
        if (response.error) {
          this.errorMessage = response.error;
          this.userDetails = null;
        } else {
          this.userDetails = response;
          this.errorMessage = '';
        }
      },
      (error) => {
        console.error('Error fetching user details:', error);
        this.errorMessage = `Failed to fetch user details. Please try again.\nError: ${error.statusText}`;
        this.userDetails = null;
      }
    );
  }
}
