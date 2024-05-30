import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user: any;
  selectedFile: File | null = null;
  constructor(private http: HttpClient) {
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if (this.selectedFile) {
      const username = document.querySelector(
        '#profile-username'
      ) as HTMLInputElement;
      const country = document.querySelector(
        '#profile-country'
      ) as HTMLInputElement;
      const formData = new FormData();
      formData.append('Id', this.user.id);
      formData.append('FullName', username.value);
      formData.append('Role', this.user.role);
      formData.append('Photo', this.selectedFile);
      formData.append('Counry', country.value);

      // Send the photo to the server
      this.http
        .put<any>('https://edu-api.tohirjon.uz/api/User/UpdateUser', formData)
        .subscribe(
          (response) => {
            alert('Photo uploaded successfully!');
          },
          (error) => {
            console.error('Error uploading photo:', error);
          }
        );
    }
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
