import { Component } from '@angular/core';
import { UserService } from '../../services/CRUDs/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  user: any;
  topStudents: any;
  constructor(private userService: UserService) {
    localStorage.getItem("user");
    this.user = JSON.parse(localStorage.getItem("user") || '{}');
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res) => {
      console.log(res);
      this.topStudents = res.slice(0, 5);

      this.user = res.find(
        (user: any) => user.id === localStorage.getItem('userId')
      );

      localStorage.setItem('user', JSON.stringify(this.user));

      console.log(this.user.photoPath);
    });
  }
  
}
