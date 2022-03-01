import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
//  @Input() 
//   parentData:string="";
    @Input('parentData') fullName :string="";

    @Output() childEvent=new EventEmitter();

  ngOnInit(): void {
  }

  fireEvent()
  {
    this.childEvent.emit("Hello parent from child")
  }

  whoAMI()
  {
    console.log("I'm child")
  }

}
