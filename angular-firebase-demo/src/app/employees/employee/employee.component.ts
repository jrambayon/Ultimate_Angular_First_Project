import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { ToastrService, ToastNoAnimationModule } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private toastr: ToastrService) {  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm : NgForm){
    if (employeeForm.value.$key != null){
      this.employeeService.updateEmployee(employeeForm.value);
    } else {
      this.employeeService.insertEmployee(employeeForm.value);
    }
    this.resetForm(employeeForm);
    this.toastr.success('Employee has been successfully added');
  }

  resetForm(employeeForm? : NgForm){
    if (employeeForm != null) {
      employeeForm.reset();
    }  
    this.employeeService.selectedEmployee = {
      $key : null,
      firstName : '',
      lastName : '',
      position : '',
      project : ''
    }
  }

}
