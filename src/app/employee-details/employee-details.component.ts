import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
 


  constructor(private employeeService:EmployeeService) { }
 employeeList:any=[];
 errorMessage:any=";"
  ngOnInit(): void {
   // this.employeeList=this.employeeService.getEmployees();
   this.employeeService.getEmployees().subscribe(serverData=>
    {
      this.employeeList=serverData;
    },error=>
    {
     this.errorMessage=error
    })
  }

}
