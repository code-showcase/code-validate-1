import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CapitalizeFirstPipe } from './capitalize.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CapitalizeFirstPipe]
})

export class AppComponent {
  title = 'angular form Validation Tutorial';
  angForm: FormGroup;
  constructor(private fb: FormBuilder, public capitalize: CapitalizeFirstPipe) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      formControlPhone: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.title = this.capitalize.transform(this.title);

  }
}
