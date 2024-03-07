import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgClass],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user: User = {
    fullName: '',
    userName: '',
    email: '',
    password: ''
  }

  onSubmit(event: SubmitEvent): void {
    console.log('submitted')
    console.log(this.user)
  }
}
