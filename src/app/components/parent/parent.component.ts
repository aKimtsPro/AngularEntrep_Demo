import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  listNom = [
    'pol',
    'marie',
    'dominique'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddName(nom) {
    this.listNom.push(nom);
  }

}
