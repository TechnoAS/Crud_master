import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
  employees: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.http.get<any>('http://localhost:8080/api/users/users')
      .subscribe((response: any) => {
        if (response && response.data) {
          this.employees = response.data.map((user: {
            userName: any;
            mobileNo: any;
            gender: any;
            dateOfBirth: any; id: any; firstName: any; lastName: any; email: any; 
          }) => ({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            dateOfBirth: user.dateOfBirth,
            gender: user.gender,
            mobileNo: user.mobileNo,
            userName: user.userName
          }));
        }
        console.log(this.employees);
      });
  }

  addEmployee(): void {
    const newEmployee = {
      firstName: 'New',
      lastName: 'Employee',
      dateOfBirth: '1990-01-01T00:00:00.000+00:00',
      gender: 'Male',
      email: 'new.employee@example.com',
      mobileNo: '1234567890',
      userName: 'newemployee',
      password: 'password123'
    };

    this.http.post<any>('http://localhost:8080/api/users', newEmployee)
      .subscribe((response: any) => {
        if (response.status === 'success') {
          const createdEmployee = {
            id: response.data.id,
            name: `${response.data.firstName} ${response.data.lastName}`,
            email: response.data.email,
            dateOfBirth: response.data.dateOfBirth,
            gender: response.data.gender,
            mobileNo: response.data.mobileNo,
            userName: response.data.userName
          };
          this.employees.push(createdEmployee);
        }
      });
  }

  deleteEmployee(id: string): void {
    this.employees = this.employees.filter(employee => employee.id !== id);
  
    this.http.delete<any>(`http://localhost:8080/api/users/users/${id}`)
      .subscribe(
        response => {
          if (response && response.status !== 'success') {
            alert('Failed to delete the employee. Fetching the updated list.');
            this.fetchEmployees();
          }
        },
        error => {
          alert('An error occurred while deleting the employee.');
          this.fetchEmployees();
        }
      );
  }
}