import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: any[] = [];
  contact: any = {};
  bgColor: string = '';

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getcontacts();
  }

  // to get a random user from all users
  getcontacts() {
    this.api.getallcontacts().subscribe((data: any) => {
      this.contacts = data.users;
      this.getRandomcontact();
    });
  }

  // get one random user
  getRandomcontact() {
    var index = Math.floor(Math.random() * this.contacts.length - 1) + 1;
    this.contact = this.contacts[index];
    this.bgColor = Math.floor(Math.random() * 16777215).toString(16);
  }
}


