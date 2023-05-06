import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {
    id: 0,
    username: '',
    description: '',
    email: '',
    fname: '',
    lname: '',
    password: '',
    address: '',
    city: '',
    country: '',
    code: 0,
    fb:'',
    insta:'',
    linkedin:''

  }
  users: User[];
  constructor(private userService: UserService) { }


  getUserById(id: number) {
    this.userService.getUserById(id)
      .subscribe(user => {
        this.user=user;
        console.log(user)
      });
  }
  onSubmit() {
    this.userService.updateUser(1,this.user)
    .subscribe(user => {
      alert('User updated successfully!');
    });
    /*this.userService.createUser(this.user).subscribe(
      (createdUser: User) => {
        console.log('User created:', createdUser);
      },
      (error: any) => {
        console.error('Failed to create user:', error);
      }
    );*/

  }

  ngOnInit() {
    this.getUserById(1);
  }

}
