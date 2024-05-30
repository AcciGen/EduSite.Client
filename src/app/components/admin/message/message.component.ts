import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface Message {
  id: string;
  message: string;
  date: string;
  groupId: string;
  senderId: string;
  sender: {
    userName: string;
    normalizedUserName: string;
    email: string;
    normalizedEmail: string;
    emailConfirmed: boolean;
    fullName: string;
    country: string;
    joinedData: string;
    isActive: boolean;
    role: string;
    photoPath?: string;
  };
}
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {
  messages: Message[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchMessages();
  }
  getAvatarUrl(photoPath?: string): string {
    const baseUrl = 'https://edu-api.tohirjon.uz/';
    const defaultAvatarUrl = "https://i.pinimg.com/736x/f0/4f/16/f04f16f4ef5fd93fcf6cacfc35934173.jpg";
    return photoPath ? `${baseUrl}${photoPath}` : defaultAvatarUrl;
  }
  fetchMessages(): void {
    this.http.get<Message[]>('https://edu-api.tohirjon.uz/api/Message/GetAllMessages')
      .subscribe(data => this.messages = data);
  }
}
