import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  childString:string="Rawda"
//  @Input() 
//   parentData:string="";
    cars=["KIA","TIPO","FIAT"]
    @Input('parentData') fullName :string="";

    @Output() childEvent=new EventEmitter();

  ngOnInit(): void {
  }

  fireEvent()
  {
    this.childEvent.emit(this.cars)
  }

  whoAMI()
  {
    console.log("I'm child")
  }

}
