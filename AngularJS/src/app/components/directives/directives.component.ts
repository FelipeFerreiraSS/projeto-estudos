import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 20
  color = 'red'

  classes = ['title-1', 'large-title']

  constructor() { }

  ngOnInit(): void {
  }

}
