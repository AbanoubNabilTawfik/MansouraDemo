import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"JavaScript"},
    {"id":3,"name":"React JS"},
    {"id":4,"name":"Vue JS"}
  ]
  selectedId:any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.selectedId=params.get('id');
    })
  }

  onSelcect(dept:any)
  {
    // if(dept.id==1)
    // {

    // }
    this.router.navigate(["/department",dept.id]);
  }

}
