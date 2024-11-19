// employee-edit.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class EmployeeEditComponent implements OnInit {
  @Input() employee: any; // Input property to receive employee data
  employeeForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      id: [{ value: this.employee.id, disabled: true }, Validators.required],
      name: [this.employee.name, Validators.required],
      salary: [this.employee.salary, Validators.required],
      age: [this.employee.age, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.employeeForm && this.employeeForm.valid) {
      const updatedEmployee = {
        ...this.employee,
        ...this.employeeForm.getRawValue()
      };
      console.log(updatedEmployee);
      // Add logic to update the employee in the table
    }
  }
}