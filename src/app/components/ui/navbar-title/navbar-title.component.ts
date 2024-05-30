import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-title',
  templateUrl: './navbar-title.component.html',
  styleUrls: ['./navbar-title.component.scss']
})
export class NavbarTitleComponent implements OnInit {
  user: any;
  currentDate!: string;

  constructor() {
    localStorage.getItem('user');

    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this.currentDate = this.formatDate();
  }

  formatDate(): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const today: Date = new Date();
    return today.toLocaleDateString(undefined, options);
  }
}
