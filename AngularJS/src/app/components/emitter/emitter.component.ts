import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumberAdd() {
    this.myNumber = this.myNumber + 1
  }

  onChangeNumberRemove(){
    this.myNumber = this.myNumber - 1
  }

}
