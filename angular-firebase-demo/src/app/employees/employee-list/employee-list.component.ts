import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    var empl = this.employeeService.getData();
    empl.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var employee = element.payload.toJSON();
        employee["$key"] = element.key;
        this.employeeList.push(employee as Employee);
      });
    });
  }

  onEdit(employee: Employee){
    this.employeeService.selectedEmployee = Object.assign({},employee);
  }

  onDelete(employee: Employee){
    this.employeeService.deleteEmployee(employee);
  }

}

