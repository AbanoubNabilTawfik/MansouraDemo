import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees()
  {
    return [
      {"name":"Ahmed Mahmoud","age":25},
      {"name":"Mohamed Sayed","age":30},
      {"name":"Asmaa Mostafa","age":26}
    ]
  }
}