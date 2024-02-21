import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fist-component',
  templateUrl: './fist-component.component.html',
  styleUrls: ['./fist-component.component.css']
})
export class FistComponentComponent implements OnInit {
  name: string = "Felipe"
  age: number = 24
  job = 'programador'
  food = ['banana', 'uva']
  car = {
    name: 'Ford',
    age: 1999
  }

  constructor() { }

  ngOnInit(): void {
  }

}
