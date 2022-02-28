import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }
  isDisplayed=false;

  isLoggedIn=true;
  fullName="Abanoub Nabil"
  car:string="LOGAN"
  cars=["LOGAN","KIA","Lncer","Tibo"];

  persons=[
    {"name":"Ahmed","age":30},
    {"name":"Asmaa","age":25},
    {"name":"Mostafa","age":40}
  ]

  ngOnInit(): void {
  }

}
