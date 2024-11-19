import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePgComponent } from './pages/home-pg/home-pg.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';

export const routes: Routes = [
    {

        path: '',
        component: LandingPageComponent,
        title: 'Techno Aspire',
    },
    {
        path: 'home-pg',
        component: HomePgComponent,
        title: 'Admin Dashboard',
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        title: 'Techno Aspire',
    },
    {
        path: 'employee-profile',
        component: EmployeeProfileComponent,
        title: 'Employee Data',
    },
    {
        path: 'employee-add',
        component: EmployeeAddComponent,
        title: 'Add Employee',
    },
    {
        path: 'employee-edit',
        component: EmployeeEditComponent,
        title: 'Edit Employee',
    },
   
];