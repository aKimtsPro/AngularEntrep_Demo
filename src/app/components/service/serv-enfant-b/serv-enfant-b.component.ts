import { Component, OnInit } from '@angular/core';
import { NomService } from 'src/app/services/nom.service';

@Component({
  selector: 'app-serv-enfant-b',
  templateUrl: './serv-enfant-b.component.html',
  styleUrls: ['./serv-enfant-b.component.css']
})
export class ServEnfantBComponent implements OnInit {

  listNom: string[] = [];

  constructor(private service: NomService) {
    service.listNomChanged.subscribe((list) => this.listNom = list);
  }

  ngOnInit(): void {
  }

}
