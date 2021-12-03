import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getActiveUsers();

    this.userService.onStatusChange.subscribe(() => {
      this.users = this.userService.getActiveUsers();
    });
  }

  setToInactive(username: string) {
    this.userService.inactivateUser(username);
  }
}
