import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees :any;
  employeeName: string="";
  page: number=1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let employee= this.http.get("https://5f37efc3bbfd1e00160bf767.mockapi.io/ap/v1/users");
    employee.subscribe((data)=>this.employees=data);
  }

}
