import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

type Status = 'stable' | 'offline' | 'critical';
type InstanceType = 'small' | 'medium' | 'large';

interface Server {
  instanceType: InstanceType,
  name: string,
  status: Status,
  started: Date,
}

@Component({
  selector: 'app-assignment-viii',
  templateUrl: './assignment-viii.component.html',
  styleUrls: ['./assignment-viii.component.scss']
})
export class AssignmentVIIIComponent {
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: this.randomStatus(),
      started: new Date()
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: this.randomStatus(),
      started: new Date()
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: this.randomStatus(),
      started: new Date()
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: this.randomStatus(),
      started: new Date()
    }
  ];

  keys = Object.keys(this.servers[0]);

  form = new FormGroup({
    sortKey: new FormControl(this.keys[0]),
    sortOrder: new FormControl("asc"),
  });

  refresh(): void {
    this.servers.forEach((server) => {
      if (server.status === "stable") {
        server.status = this.randomStatus();
      }
    })
  }

  start(server: Server): void {
    server.status = 'stable';
    server.started = new Date()
  }
  
  stop(server: Server): void {
    server.status = 'offline';
  }

  private randomStatus(): Status {
    const val = Math.random();
  
    if (val <= 0.05) {
      return 'critical';
    }
  
    if (val <= 0.15) {
      return 'offline';
    }
    
    return 'stable';
  }

}
