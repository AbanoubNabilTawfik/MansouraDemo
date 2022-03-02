import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }
  deptId:any;
  ngOnInit(): void {

   // this.deptId=this.activatedRoute.snapshot.paramMap.get("id");
   this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
   {
     this.deptId=params.get('id');
   })

    
  }

  goPrev()
  {

      let prevId=parseInt(this.deptId)-1;
      // if(prevId==1)

      this.router.navigate(["/department",prevId])

  }

  goNext()
  { 
    let nextId=parseInt(this.deptId)+1;
    this.router.navigate(["/department",nextId])

  }

  goToDepartment()
  {
    this.router.navigate(["/departments",{id:this.deptId}]);
  }

  goToOverView()
  {
    this.router.navigate(["overview"],{relativeTo:this.activatedRoute})
  }

  gotToContact()
  {
    this.router.navigate(["contact"],{relativeTo:this.activatedRoute})
  }
}
