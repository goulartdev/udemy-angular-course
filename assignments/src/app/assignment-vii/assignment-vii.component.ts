import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

interface Project {
  name: string,
  email: string,
  status: string
}

@Component({
  selector: 'app-assignment-vii',
  templateUrl: './assignment-vii.component.html',
  styleUrls: ['./assignment-vii.component.scss']
})
export class AssignmentVIIComponent implements OnInit {
  form: FormGroup | null = null;
  status: string[] = ['stable', 'critical', 'finished'];
  project: Project | null = null;

  errorMessages: { [key: string]: string } = {
    'required': 'This field is required',
    'email': 'This email is invalid',
    'invalidProjectName': 'This project name is invalid',
  }

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      // name: new FormControl(null, [Validators.required, CustomValidators.invalidProjectName]),
      name: new FormControl(null, [Validators.required], CustomValidators.asyncInvalidProjectName ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(this.status[0], [Validators.required]),
    });
  }

  showErrors(field: string): boolean {
    return !!(this.form?.get(field)?.touched && this.form?.get(field)?.invalid);
  }

  getErrorMessages(field: string): string[] {
    const errors = Object.keys(this.form?.get(field)?.errors || {});

    const messages = errors.map((code: string) => {
      return this.errorMessages[code] || code;
    })

    return messages
  }

  onSubmit() {
    console.log(this.form);
    this.project = this.form?.value;
  }

}
