import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfant-b',
  templateUrl: './enfant-b.component.html',
  styleUrls: ['./enfant-b.component.css']
})
export class EnfantBComponent implements OnInit {

  @Input('list-nom')
  listNom: string[]

  @Input()
  input: string;

  constructor() { }

  ngOnInit(): void {
  }

}
