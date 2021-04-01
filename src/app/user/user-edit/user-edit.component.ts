import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = null;


  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usrsvc.get(+id).subscribe(
      res => {
        console.log("user:", res);
        this.user = res;
    },
    err => {
      console.error(err);
    })
  }

  save(): void{
    console.log("Before change:", this.user);
    this.usrsvc.update(this.user).subscribe(
      res => {
        console.log("edit successful");
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error(err);
      }
    )
  }
}
