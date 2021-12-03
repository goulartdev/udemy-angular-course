import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getInactiveUsers();

    this.userService.onStatusChange.subscribe(() => {
      this.users = this.userService.getInactiveUsers();
    });
  }

  setToActive(username: string) {
    this.userService.activateUser(username);
  }
}
