import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
 employeeList:any=[];
 errorMessage:any="";
  ngOnInit(): void {
   // this.employeeList=this.employeeService.getEmployees();
   this.employeeService.getEmployees().subscribe(data=>
    {
      this.employeeList=data
    },serverError=>
    {
      this.errorMessage=serverError;
    })
  }

}
