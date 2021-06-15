import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  age: number = 0;
  color = "#FF0000";
  nom: string;
  selectedColor;

  prenoms = [
    "alexandre",
    "gabriel",
    "dimitri"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(arg) {
    console.log(arg);
  }

  onMouseEnter() {
    this.color = "#00FF00"
  }
}
