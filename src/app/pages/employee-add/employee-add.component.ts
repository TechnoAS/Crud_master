import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, ReactiveFormsModule]
})
export class EmployeeAddComponent implements OnInit {
  // employeeForm: FormGroup | undefined;
  employeeForm = new FormGroup<any>({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      id: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }
  @NgModule({
  
    imports: [
  
      // existing imports
  
      ReactiveFormsModule,FormBuilder, FormGroup, Validators ,Component, NgModule,
  
  
    ],
  
    // other module configurations
  
  })

  onSubmit(): void {
    if (this.employeeForm && this.employeeForm.valid) {
      console.log('Form Submitted', this.employeeForm.value);
      // Add your form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
}