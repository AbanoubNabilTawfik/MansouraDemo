import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor() { }
  userModel:User=new User("","abnabil@iti.gov.eg","123456","Angular",true);

  topics=["Angular","JavaScript","Bootstrap"]

  ngOnInit(): void {
    
  }

  submitData()
  {
    //Call service to call api
    console.log(this.userModel)
  }

}
