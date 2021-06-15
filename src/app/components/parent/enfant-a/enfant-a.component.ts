import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant-a',
  templateUrl: './enfant-a.component.html',
  styleUrls: ['./enfant-a.component.css']
})
export class EnfantAComponent implements OnInit {

  nom;

  @Output('add-name')
  nameEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.nameEmitter.emit(this.nom);
  }

}
