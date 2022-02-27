import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  fullName:string="Ahmed Mohmamed";
  url:string=window.location.href;
  txtId:string="myId2"
  isDisabled:boolean=true;
  className:string="text-danger";
  hasError:boolean=false;
  isSpecial:boolean=true;

  messageClasses={
    "text-danger":this.hasError,
    "text-success":!this.hasError,
    "text-special":this.isSpecial
  }

  myStyle={
    color:"gray",
    fontStyle:"italic"
  }


  ngOnInit(): void {
  }



}
