import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: Record<string, boolean> = {
    user_1: true,
    user_2: true,
    user_3: true,
    user_4: true,
    user_5: true,
    user_6: false,
    user_7: false,
    user_8: false,
    user_9: false,
    user_10: false,
  };

  onStatusChange = new EventEmitter();

  constructor(private logService: LogService) {}

  activateUser(username: string) {
    this.users[username] = true;

    this.onStatusChange.emit();
    this.logService.incActivations();
  }

  inactivateUser(username: string) {
    this.users[username] = false;

    this.onStatusChange.emit();
    this.logService.incInactivations();
  }

  getActiveUsers(): string[] {
    return this.getUsers(true);
  }

  getInactiveUsers(): string[] {
    return this.getUsers(false);
  }

  private getUsers(active: boolean): string[] {
    return Object.entries(this.users)
      .filter(([username, isActive]) => isActive === active)
      .map(([username, isActive]) => username);
  }
}
