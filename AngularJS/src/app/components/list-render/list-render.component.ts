import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name:'Bob', type: 'cachorro', age: 12 },
    { name:'Tom', type: 'gato', age: 5 },
    { name: 'Rex', type: 'cachorro', age: 2 }
  ]

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal)
  }

}
