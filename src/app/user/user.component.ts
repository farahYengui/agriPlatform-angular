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
    fName: '',
    lName: '',
    password: '',
    address: '',
    city: '',
    country: '',
    code: 0,

  }
  users: User[];
  constructor(private userService: UserService) { }
  getUsers() {
    this.userService.getAllUsers.subscribe(users => this.users = users);
  }

  getUserById(id: number) {
    this.userService.getUserById(id)
      .subscribe(user => {
        
      });
  }
  onSubmit() {
    this.userService.updateUser(1,this.user)
    .subscribe(user => {
      console.log('User updated successfully!');
      this.getUsers();
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
  }

}
