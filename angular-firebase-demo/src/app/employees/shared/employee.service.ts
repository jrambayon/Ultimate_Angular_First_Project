import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee : Employee){
    this.employeeList.push({
      firstName: employee.firstName,
      lastName: employee.lastName,
      position: employee.position,
      project: employee.project
    });
    
  }

  updateEmployee(employee : Employee){
    this.employeeList.update(employee.$key, {
      firstName: employee.firstName,
      lastName: employee.lastName,
      position: employee.position,
      project: employee.project
    });
  }

  deleteEmployee(employee : Employee){
    this.employeeList.remove(employee.$key);
  }
}
