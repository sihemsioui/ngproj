import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  emps=[{firstName: 'sihem', lastName: 'sioui', email: 'si@'}, {firstName: 'user', lastName: 'user2', email: 'user@'},{firstName: 'emp', lastName: 'emp', email: 'emp3@'}];
  constructor() { }

  getEmployee(id) {
    console.log(this.emps[id]);
    return this.emps[id];

  }

  createEmployee(employee) {
    this.emps.push(employee);
    return ;
  }

  updateEmployee(id, value) {
    this.emps[id]=value;
    console.log(this.emps);
    return ;
  }

  deleteEmployee(id){
    this.emps.splice(id,1)
    return ;
  }

  getEmployeesList() {
    return this.emps ;
  }

}
