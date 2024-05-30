import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
    email: string = '';
  constructor(private router: Router,private resetRequestService:AuthService){}
    sendCode(){
        if (this.email === null || this.email.indexOf('@') < 0) {
            alert('Please enter a valid email address');
            this.email = '';
            this.router.navigate(['/forgot-password']);
            return;
        }

        this.resetRequestService.resetRequest(this.email).subscribe({
          next:(data)=>{
            console.log(data)
            if(data.isSuccess==false){
              alert('Email Not found 😡');
              this.email = '';
              this.router.navigate(['/forgot-password']);
              return;
            }
            else{
              alert("Password Reseted!\n And sent to your email!")
              this.router.navigate(['/login']);
            }
          },
          error:(err)=>{
            console.log(err)
          }
        })

        
    }
}
