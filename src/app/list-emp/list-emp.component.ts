import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";
import { Employee } from "../employe";
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FiltrePipe } from '../filtre.pipe';


@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  term: any;
  employees:any;
  searchText: any;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {

    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }
  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }

}
