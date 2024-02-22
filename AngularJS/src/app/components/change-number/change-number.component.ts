import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumberAdd: EventEmitter<any> = new EventEmitter
  @Output() changeNumberRemove: EventEmitter<any> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  handleClickAdd() {
    this.changeNumberAdd.emit()
  }

  handleClickRemove() {
    this.changeNumberRemove.emit()
  }

}
