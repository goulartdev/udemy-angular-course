import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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
      name: new FormControl(null, [Validators.required], this.isValidName ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(this.status[0], [Validators.required]),
    });
  }

  isValidName(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        if (typeof control.value === 'string' && control.value.toLowerCase() === 'test') {
          resolve({ 'invalidProjectName': true });
        } else {
          resolve(null);
        }
      }, 1000);
    })
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
