import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: User[] = [];
  searchCriteria: string ="";
  constructor(
    private usrsvc: UserService
  ) { }

  ngOnInit(): void {
    this.usrsvc.list().subscribe(
      res => {
        console.log("User:", res);
        this.users = res as User[];
      },
      err => {
        console.error(err);
        
      }
    );
  }

}
