import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  @ViewChild(ChildComponent) child:ChildComponent=new ChildComponent();

  fullName:string="This is message from parent";

  dataFromChild:any;
  childData:any;
  ngOnInit(): void {
    
  }
  ngAfterViewInit()
  {
    this.child.whoAMI();
    this.childData=this.child.childString;
    this.childData="ay 7aga"
  }

}
