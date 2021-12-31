import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Subscription {
  email: string,
  type: string,
  password: string
}

@Component({
  selector: 'app-assignment-vi',
  templateUrl: './assignment-vi.component.html',
  styleUrls: ['./assignment-vi.component.scss']
})
export class AssignmentVIComponent implements OnInit {
  subscriptions: string[] = ["basic", "advanced", "pro"];
  subscription: Subscription | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  get defaultSubscription(): string {
    return this.subscriptions[0];
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.subscription = form.value;
  }

}
