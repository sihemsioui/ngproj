import { Employee } from '../employe';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  id: number;
  employee: any;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employee =this.employeeService.getEmployee(this.id);
    

  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee);
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
