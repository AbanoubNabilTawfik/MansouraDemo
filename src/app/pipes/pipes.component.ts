import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }
  fullName:string="Salma Mohamed";

  ngOnInit(): void {
  }

  todayDate:Date= new Date();

}
